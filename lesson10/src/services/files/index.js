import instance from '../core'

const resource = '/files'

export default {
  uploadFile (payload) {
    console.log(payload.data)
    let dat = instance.post(`${resource}`, payload)
console.log(dat)
   return instance.post(`${resource}`, payload)
  },
  getFileById (id) {
//let dat = instance.get(`${resource}/${id}`)
  //  console.log(dat)
    return instance.get(`${resource}/${id}`)

  }

}
