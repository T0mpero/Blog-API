const express = require('express');
const router = express.Router();
const CategoriesModel = require('./CategoriesModel');
const slugify = require('slugify');

router.get("/admin/categories/new", (req, res) =>{
    res.render('admin/categories/newCategory');
});

router.get('/admin/categories', async (req,res)=>{
    const categories = await CategoriesModel.findAll();

    res.render('admin/categories/index', {categories : categories});
});

router.post('/categories/save', (req, res) =>{
    let title = req.body.title;

    if(title != undefined || title != " "){
        CategoriesModel.create({
            title : title,
            slug : slugify(title)
        }).then(()=> res.redirect('/'))

    }else{
        res.redirect('/admin/categories/new')
    }
});

router.post('/categories/delete', (req, res) =>{
    let id = req.body.id;
    
    if (id != undefined){
        if(!isNaN(id)){
            CategoriesModel.destroy({where : {id : id}})
            .then(()=> {res.redirect('/admin/categories');});
        }
        else{res.redirect('/admin/categories');}
    }
    else{res.redirect('/admin/categories');}
});

router.get('/admin/categories/edit/:id', (req,res) =>{
    let {id} = req.params; 

    if(isNaN(id)){
        res.redirect('/admin/categories');
    }
    CategoriesModel.findByPk(id)
    .then(category =>{
        if(category != undefined){
            res.render('admin/categories/editCategory',  {category : category});
        }else{
            res.redirect('/admin/categories');
        }
    }).catch(() =>{
        res.redirect('/admin/categories');
    });
});


module.exports = router;