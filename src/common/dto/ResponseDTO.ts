import { ResponseMsgConst } from '../const/ResponseMsgConst';
import getSeqAutoincrement from '../helper/getSeqAutoincrement';

export class ErrorDTO {
  public code: string;
  public msg: {};
}

export class ResponseDTO {
  public transId: string;
  public code: string;
  public msg: string;
  public body: {};
  public error: ErrorDTO;

  static errorProc(body: { title: string; error: { code: string; msg: {} }; result: any }) {
    const response: ResponseDTO = {
      transId: getSeqAutoincrement(body.title),
      code: ResponseMsgConst.RESP_5XX.CODE,
      msg: ResponseMsgConst.RESP_5XX.MSG,
      body: body.result,
      error: {
        code: body.error.code,
        msg: body.error.msg,
      },
    };
    return response;
  }

  static successProc(result: any) {
    const response: ResponseDTO = {
      transId: result._id,
      code: ResponseMsgConst.RESP_2XX.CODE,
      msg: ResponseMsgConst.RESP_2XX.MSG,
      body: result,
      error: {
        code: '',
        msg: '',
      },
    };
    return response;
  }
}
