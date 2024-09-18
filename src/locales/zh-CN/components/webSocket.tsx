/* eslint-disable max-len */
import React from 'react';

const WebSocket = {
  maxReconnectError:
    '消息通知连接已经连续失败{{text}}次，如需继续尝试连接，需要重新刷新一次页面或者重新登录一下`',
  viewDetail: '查看详情',
  gotoView: '前往查看',
  PMP_CAMPAIGN: {
    message: '消息提醒',
    description:
      '收到PMP推送的待处理线下活动商机信息，请前往查看并上传商机信息，上传后客户及商机信息将同步至C@P。',
    okText: '立即前往',
  },
  SIGN_FINISH_NOTICE: {
    message: '客户完成签署',
    description: '客户{{customerName}} ({{customerTel}}) 于{{signTime}} 完成合同文档的签署。',
  },
  APPROVE_FINISH_NOTICE: {
    message: '文档已审批',
    description: '{{approveTime}}，提交的文档已通过审批。',
  },
  ORDER_FINISH_NOTICE: {
    PROCESSING: { message: '文档生效失败', description: '文档生效失败，请联系POS技术人员' },
    FINISHED: { message: '订单已签单', description: '{{finishTime}}，提交的文档已生效。' },
    CANCELED: { message: '订单已取消', description: '{{finishTime}}，当前文档已作废。' },
  },
  AUDIT_FLOW_EXCEPTION_NOTICE: {
    message: '审批流程异常',
    description:
      '{{modelName}}{{flowTypeName}}流程异常，请至审批列表中检查详情，并尽快联系相关人员进行处理',
  },
  DEALER_CHANGE_NOTICE: {
    message: '切换门店',
    description: '该账号所在门店已切换。',
  },
  SALES_ORDER_CREATE_NOTICE: {
    message: '销售跟进状态有更新',
    description:
      '您的订单 {{posOrderCode}} 中的车辆{{commNo}} ，销售跟进状态为“{{vehicleStatus}}”。',
  },
  TEST_DRIVE_SIGN_FINISH_NOTICE: {
    message: '客户已签署',
    description: (name: string, type: string, curOrderId: number): JSX.Element => (
      <>
        客户 <b>{name}</b> 已完成{type}单({curOrderId}) 的签署，请及时前往APP进行 试乘/试驾活动
      </>
    ),
  },
  DELIVERY_CHECK_FINISH_NOTICE: {
    message: '客户已签署',
    description:
      '客户已签署交车文档，{{approveTime}}，客户{{customerName}} ({{mobile}}) 已完成签署。',
  },
  POS_SYSTEM_NOTICE_PUBLISH_NOTICE: {
    message: '系统通知',
    description: '',
  },
  APP_LOGOUT_SEND_WEB_NOTICE: {
    message: '系统消息',
  },
  DELIVERY_SIGN_SUCCESS: {
    okText: '确认交车',
    cancelText: '稍后处理',
    message: '提醒',
    description:
      '交车单 {{posOrderCode}} 中的车辆 {{modelName}}｜{{commNo}} ，交车文档 {{signedContractName}} 已经签署，是否需要现在就完成交车仪式？',
  },
  POC_APPROVE_FINISH_NOTICE: {
    QUOTATION: {
      message: '销售申请已通过',
      description: (modelName: string, pocOrderCode: string): JSX.Element => (
        <>
          易手车订单{' '}
          <b>
            {modelName}({pocOrderCode})
          </b>{' '}
          销售申请已通过
        </>
      ),
    },
    ORDER: {
      message: '订单审批已通过',
      description: (modelName: string, pocOrderCode: string): JSX.Element => (
        <>
          易手车订单{' '}
          <b>
            {modelName}({pocOrderCode})
          </b>{' '}
          的审批已通过
        </>
      ),
    },
    CANCEL: {
      message: '订单取消审批已通过',
      description: (modelName: string, pocOrderCode: string): JSX.Element => (
        <>
          易手车订单{' '}
          <b>
            {modelName}({pocOrderCode})
          </b>{' '}
          的取消审批已通过
        </>
      ),
    },
  },
  POC_ORDER_FINISH_NOTICE: {
    message: '订单已签单',
    description: (modelName: string, pocOrderCode: string): JSX.Element => (
      <>
        易手车订单{' '}
        <b>
          {modelName}({pocOrderCode})
        </b>{' '}
        已签单完成
      </>
    ),
  },
  POC_ORDER_CANCEL_NOTICE: {
    message: '订单已取消',
    description: (modelName: string, pocOrderCode: string): JSX.Element => (
      <>
        易手车订单{' '}
        <b>
          {modelName}({pocOrderCode})
        </b>{' '}
        已完成取消
      </>
    ),
  },
  FDD_CERTIFIED_NOTICE: {
    message: '客户已认证',
    description: (customerName: string, customerTel: string): JSX.Element => (
      <>
        短信链接已发送至客户 <b>{customerName}</b> 手机 <b>{customerTel}</b>
        ，请持续追踪客户签署状况。
      </>
    ),
  },
  POC_SIGN_FINISH_NOTICE: {
    message: '客户已签署',
    description: (customerName: string, modelName: string, pocOrderCode: string): JSX.Element => (
      <>
        客户 <b>{customerName}</b> 已完成易手车订单{' '}
        <b>
          {modelName}({pocOrderCode})
        </b>{' '}
        的签署
      </>
    ),
  },
  LEAD_SALES_ORDER_CREATE_NOTICE: {
    message: '销售跟进任务创建成功',
    description:
      '关于客户{{customerName}}（{{bpId}}）的销售跟进创建成功，销售跟进时间为{{startDate}}至{{endDate}}，请及时完成任务的跟进。',
  },
  POC_AUDIT_FLOW_EXCEPTION_NOTICE: {
    message: '审批流程异常',
    description: (modelName: string, posOrderCode: string, flowName: string): JSX.Element => (
      <>
        易手车订单 <br />
        <b>
          {modelName}({posOrderCode})
        </b>{' '}
        {flowName}
        审批流程缺少审批人，请联系门店协调进行处理
      </>
    ),
    TYPE_QUOTATION: '销售申请',
    TYPE_ORDER: '订单申请',
    TYPE_CHANGE: '订单变更',
    TYPE_CANCEL: '订单取消',
  },
  QUOTATION_APPROVED_NOTICE: {
    message: '折扣申请已通过',
    description:
      '新车报价单{{modelDesc}}({{quotationId}}) 折扣申请已通过，您可继续完成后续订单操作',
  },
  QUOTATION_REJECT_NOTICE: {
    message: '折扣申请已驳回',
    description:
      '新车报价单{{modelDesc}}({{quotationId}}) 折扣申请已驳回，您可前往报价单修改报价信息之后再次提交折扣申请',
  },

  CUSTOMER_CERTIFICATION_NOTICE: {
    message: '电子签发送成功',
    errorMessage: '电子签发送失败',
    description:
      '签署链接已成功发送至客户手机{{customerTel}}，请提醒客户在手机短信中进行电子签署。签署后，文档状态变为已签署。',
  },
  RE_CREATE_CONTRACT_SUCCEED: {
    message: '合同更新通知',
    description: '您修改的信息已经更新到{{posOrderCode}}的合同中。',
  },
};

export default WebSocket;
