import { ReactElement } from 'react';

const UploadTemplate = {
  uploadNew: '上传新模板',
  updateModal: {
    title: '更新模板',
    content: '上传后，新模板内容将覆盖历史模板内容。新模板中字段名称一致的合同字段，将保留原来已配置过的字段属性，如是否必填、是否支持预填值等。上传成功后可在模板配置页面重新编辑。',
    okText: '去上传',
  },
  messages: {
    updateSuccess: '模板更新成功',
    uploadSuccess: '模板上传成功',
    selectType: '请选择模板的类型',
    uploadFile: '请上传文件',
    uploadDone: '上传成功',
    pleaseSet: '上传成功，请及时设置启用条件',
  },
  uploadErrorModal: {
    title: '上传失败',
    configDesc: '“配置说明”',
    wordDocument: 'Word文档(.docx)',
    comment: '用户评论、注释、批注、或修订意见',
    accept: "【审阅】{'->'} 【接受】{'->'} 【接受所有更改并停止修订】",
    remark: '用户评论、注释、批注',
    invalidField: (nestNode: ReactElement, configNode: ReactElement): ReactElement => (
      <>
        您当前上传的模板中包含无效的自定义字段名称格式，例如{nestNode}。请参考列表页上的
        {configNode}更新模板后重新上传。
      </>
    ),
    supportFormat: (suffixNode: ReactElement, wordNode: ReactElement): ReactElement => (
      <>
        仅支持上传格式为{suffixNode}的Word文档。请将文件另存为“{wordNode}”格式后重新上传。请勿直接修改文件后缀名称，系统无法识别此类文件。
      </>
    ),
    contractVariable: (curNode: ReactElement): ReactElement => (
      <>
        您当前上传的模板中没有配置任何合同变量。请参考列表页上的{curNode}完成模板配置后重新上传。
      </>
    ),
    fileInclude: (curNode: ReactElement): ReactElement => (
      <>
        您当前上传的word文档中包含了{curNode}等内容导致上传失败。请您将以上内容删除并确保上传的文档为最终版本后再上传重试。建议修改方式：
      </>
    ),
    commentInclude: (curNode: ReactElement): ReactElement => (
      <>
        1.如文档中包含修订意见，请在word中点击{curNode}后再上传重试；
      </>
    ),
    remarkInclude: (curNode: ReactElement): ReactElement => (
      <>
        2.如文档中包含{curNode}等，请全部删除后再上传重试。
      </>
    )
  },
  uploadModal: {
    okText: '上传',
    stepOne: '1、请选择模板类型',
    templateType: '请选择模板类型',
    reSelect: '重新选择',
    selectFile: '选择文件',
    stepTwo: '2、选择要上传的文件',
    overLimit: '文件 {{name}} 超过了限制大小{{max}}',
    acceptFileTip: '仅支持 {{acceptSuffix}} 文件格式的上传'
  },
  // t('TemplatePage:UploadTemplate.messages.pleaseSet')
};

export default UploadTemplate;