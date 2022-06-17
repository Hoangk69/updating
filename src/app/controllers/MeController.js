const Course = require('../modles/Course');
class MeController{
    me(req, res, next){
        Course.find({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject())
                res.render('./me/stored-courses', {courses})
            })
            .catch(next)
    }
}
module.exports = new MeController;