// @ts-check
/**
 * 프로젝트를 시작하는 함수
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function start(config) {
    return true;
}
/**
 * 프로젝트를 종료시키는 함수
 * @param {number} code 
 * @returns number
 */
export function end(code) {
    return code + 1 ;
}