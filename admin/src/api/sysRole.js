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

// 添加角色请求方法
export const SaveSysRole = (data) => {
    return request({
        url: '/admin/system/sysRole/saveSysRole',
        method: 'post',
        data
    })
}

// 保存修改
export const UpdateSysRole = (data) => {
    return request({
        url: '/admin/system/sysRole/updateSysRole',
        method: 'put',
        data
    })
}

// 删除角色
export const DeleteSysRoleById = (roleId) => {
    return request({
        url: '/admin/system/sysRole/deleteSysRole/' + roleId,
        method: 'delete'
    })
}