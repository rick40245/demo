/* 判斷api回傳狀態碼執行成功或失敗function */
export function apiHandler(request, successFunction, failureFunction = () => { }) {
    if (request.resultCode * 1 === 21 || request.resultCode * 1 === 22) return failureFunction()
    if (request.resultCode * 1 === 20) return successFunction()
}

export function cloneObjec(object) {
    return JSON.parse(JSON.stringify(object));
}