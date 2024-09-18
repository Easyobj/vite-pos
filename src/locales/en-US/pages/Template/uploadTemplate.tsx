import { ReactElement } from 'react';

const UploadTemplate = {
  uploadNew: 'Upload New Template',
  updateModal: {
    title: 'Update Template',
    content: 'After uploading, the new template content will overwrite historical template content. For contract fields with matching field names in the new template, previously configured field properties such as whether they are required and whether they support prefilled values will be retained. You can re-edit the template on the template configuration page after a successful upload.',
    okText: 'Go Upload',
  },
  messages: {
    updateSuccess: 'Template Updated Successfully',
    uploadSuccess: 'Template Uploaded Successfully',
    selectType: 'Please Select the Template Type',
    uploadFile: 'Please Upload a File',
    uploadDone: 'Upload Complete',
    pleaseSet: 'Upload Successful, please set the enable conditions promptly',
  },
  uploadErrorModal: {
    title: 'Upload Failed',
    configDesc: '"Configuration Instructions"',
    wordDocument: 'Word Document (.docx)',
    comment: 'User comments, annotations, notes, or revision suggestions',
    accept: "[Review] -> [Accept] -> [Accept all changes and stop revisions]",
    remark: 'User comments, annotations, notes',
    invalidField: (nestNode: ReactElement, configNode: ReactElement): ReactElement => (
      <>
        The template you are currently uploading contains invalid custom field name formats, for example {nestNode}. Please refer to the
        {configNode}on the list page to update the template and upload again.
      </>
    ),
    supportFormat: (suffixNode: ReactElement, wordNode: ReactElement): ReactElement => (
      <>
        Only supports uploading Word documents in the format {suffixNode}. Please save the file as "{wordNode}" format and upload again. Do not modify the file extension directly; the system cannot recognize such files.
      </>
    ),
    contractVariable: (curNode: ReactElement): ReactElement => (
      <>
        The template you are currently uploading does not contain any contract variables. Please refer to the{curNode}on the list page to complete the template configuration and upload again.
      </>
    ),
    fileInclude: (curNode: ReactElement): ReactElement => (
      <>
        The Word document you are currently uploading contains{curNode}and other content leading to upload failure. Please delete the above content and ensure the uploaded document is the final version before uploading again. Recommended modification methods:
      </>
    ),
    commentInclude: (curNode: ReactElement): ReactElement => (
      <>
        1. If the document contains revision suggestions, click{curNode}in Word and upload again;
      </>
    ),
    remarkInclude: (curNode: ReactElement): ReactElement => (
      <>
        2. If the document contains{curNode}, please delete them all and upload again.
      </>
    )
  },
  uploadModal: {
    okText: 'Upload',
    stepOne: '1. Select the Template Type',
    templateType: 'Select the Template Type',
    reSelect: 'Re-Select',
    selectFile: 'Select File',
    stepTwo: '2. Choose the File to Upload',
    overLimit: 'File {{name}} exceeds the size limit of {{max}}',
    acceptFileTip: 'Only supports uploading files in {{acceptSuffix}} format'
  },
};

export default UploadTemplate;