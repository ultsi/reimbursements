import * as React from 'react'
import FileReaderInput from 'react-file-reader-input';
import { Field } from 'redux-form';
import { IReimbursementFormItem, parseNumber } from './FormReimbursementItems';

interface IFormReimbursementItemProps {
  item: IReimbursementFormItem
}

interface IFormReimbursementItemState {
  file: any,
  fileState: string
}

export default class FormReimbursementItem extends React.Component<IFormReimbursementItemProps, IFormReimbursementItemState> {
  constructor(props: IFormReimbursementItemProps) {
    super(props)

    this.fileChanged = this.fileChanged.bind(this)
    this.state = {
      file: null,
      fileState: 'Ei tiedostoa...'
    }
  }

  public render() {
    const { item } = this.props
    const { file, fileState } = this.state
    return (
    <>
      <div className="item-fields">
        <Field
          name={`${item}.name`}
          component="input"
          type="text"
          placeholder="Mitä"
        />
        <Field
          name={`${item}.reason`}
          component="input"
          type="text"
          placeholder="Miksi"
        />
        <Field
          name={`${item}.price`}
          component="input"
          type="number"
          placeholder="12.34"
          parse={parseNumber}
        />
      </div>
      <div className="item-upload">
        <FileReaderInput
          as="url"
          onChange={this.fileChanged}
        > 
          <div className="file-input">
            {file ? (
              <img src={file.srcElement.result} />
            ) : null}
            {fileState}
          </div>
        </FileReaderInput>
      </div>
    </>
    )
  }

  private fileChanged = (event: any, result: any) => {
    const file = result[0]
    const fileinfo = file[1]
    if (!fileinfo.name.endsWith('.png') && !fileinfo.name.endsWith('.jpg')) {
      this.setState({
        file: null,
        fileState: 'Tiedoston on oltava .png tai .jpg'
      })
      return false
    }

    this.setState({
      file: file[0],
      fileState: fileinfo.name
    })
    console.log(file[0])
    return true
  }
}
