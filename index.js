let arr=JSON.parse(localStorage.getItem("Product"))||[]

function Obj(a,b,c,d,e,f){
this.Product_name=a
this.Product_category=b
this.Product_image=c
this.Product_price=d
this.Product_gender=e
this.Produt_solddata=f
}

function storeData(event){
    
    event.preventDefault();
    let form= document.getElementById('form');
    let product_name=form.name.value;
    let category=form.category.value;
    let image_url=form.image.value;
    let price=form.price.value;
    let gender=form.gender.value;
    let sold_data=form.sold.value;

   // console.log(product_name,category,image_url,price,gender,sold_data)

   let productdata=new Obj(product_name,category,image_url,price,gender,sold_data);
   //console.log(productdata);
   arr.push(productdata);
   console.log(arr);

   localStorage.setItem("Product",JSON.stringify(arr));
}