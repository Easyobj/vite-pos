import TemplateListPage from './templateList';
import PocTemplateConfigInfo from './pocTemplateConfigInfo';
import UploadTemplate from './uploadTemplate';
import TemplateSwitch from './templateSwitch';
import TemplateEnableConfigPage from './templateEnable';
import VariableSignatureModal from './variableSignatureModal';
import AllDealerTemplatePage from './allDealerTemplate';

const TemplatePage = {
  TemplateListPage, // 包括pcn和文档模版列表
  PocTemplateConfigInfo,
  UploadTemplate, // 上传模板
  TemplateSwitch, // 启用和禁用操作
  TemplateEnableConfigPage, // pcn文档模板启用条件页
  VariableSignatureModal, // 字段&签章配置
  AllDealerTemplatePage, // PCN门店模板管理列表页
};

export default TemplatePage;
