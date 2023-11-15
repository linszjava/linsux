import request from '@/utils/request'

const base_api = '/admin/system/sysRole'

// 角色列表
export const GetSysRoleListByPage = (current,limit,queryDto) => {
  return request({
    // ``模板字符串
    url: `${base_api}/findByPage/${current}/${limit}`, //路径
    method: 'post', //提交方式
    // 接口@RequestBody 前端 data : 名称，以json格式传输
    // 接口没有注解 ， 前端 params: 名称
    data: queryDto, //其他参数
  })
}