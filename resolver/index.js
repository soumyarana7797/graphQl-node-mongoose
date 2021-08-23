
const { getUserTeamContests } = require("../routes/rest/v1/dffUserTeamContest/fetch")
const Query = {
    // job: (root, {id}) => db.jobs.get(id),
    employees: () => getUserTeamContests()
}

// const Mutation = {
//     createJob: (root, {input}, {user} ) =>{
//         if(!user) {
//             throw new Error("Unauthorized Error")
//         }
//         const id= db.jobs.create({...input, companyId: user.companyId})
//         return db.jobs.get(id)
//     }
// }

// const Company = {
//     jobs: (company) => db.jobs.list()
//     .filter( job => job.companyId === company.id)
// }


// const Job = {
//     companies: (job) => db.companies.get(job.companyId)
// }


module.exports = {Query}