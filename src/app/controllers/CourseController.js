const Course = require('../modles/Course');
class CourseController{
    // [GET] /courses/:slug    detail course
    detail(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                course = course.toObject();
                res.render('./courses/detail',{course})
            })
            .catch(next)
    }

    // [GET] /courses/creat
    creat(req, res, next){
        res.render('./courses/creat')
    }

    // [POST] /courses/store
    store(req, res, next){
        const course = new Course({...req.body})
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => next(err))
    }
    
    update(req, res, next){
        res.send('hehe')
        // Course.updateOne({_id: req.prams._id}, {...req.body})
        //     .then()
    }
}
module.exports = new CourseController;