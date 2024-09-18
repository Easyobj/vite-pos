import ApprovalConfig from './ApprovalConfig';
import DiscountConfig from './DiscountConfig';
import DmsConfig from './DmsConfig';
import InventoryConfig from './InventoryConfig';
import MainData from './MainData';
import HomeConfigPage from './HomeConfig';
import AuthorizationApprovalPage from './AuthorizationApproval';

const PosConfigPage = {
  InventoryConfig,
  DiscountConfig,
  MainData,
  DmsConfig,
  HomeConfigPage, //顾问首页展示
  AuthorizationApprovalPage, //委托审批
  ApprovalConfig,
};

export default PosConfigPage;
