//sticky logo//

const stickyLogo=document.querySelector(".unscrolled");
const logo=document.querySelector(".logo-up");

const options= {
   
};

const mainMenuObserver= new IntersectionObserver(
    (entries,mainMenuObserver)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                stickyLogo.style.display="none"
            }
            else{
                stickyLogo.style.display="block";
            }
        });
    },options);


    mainMenuObserver.observe(logo);

//cart page creation js//

//cart elements//
    const cart=document.querySelector('.booking-mid');
    const updateBtn=document.querySelector('.cart-section3');
    const quantity=document.querySelector('.listtwo2 input[type=number]');
    let cartsItem=localStorage.getItem('courses');
    cartsItem=JSON.parse(cartsItem);
    console.log(quantity);


    if(cartsItem!=null){
        cartPage();
    }

    
    function cartPage(){
        //per unit total calculation//
       const total= unitPriceCalc(cartsItem.quant);
         
        //creating element for cart
        let cartItem=document.createElement('div');
        cartItem.innerHTML=`
            <div class="cart-section2">
                    <div class="cart-sec2 numone2">
                        <ul class="listone2">
                            <li><i class="fa fa-times"></i></li>
                            <li>${cartsItem.title} - Online - September 9, 2020</li>
                        </ul>
                    </div>

                    <div class="cart-sec2 numtwo2">
                        <ul class="listtwo2">
                            <li>${cartsItem.price}</li>
                            <li><input type="number" value="${cartsItem.quant}"></li>
                            <li class="amount">${total}</li>
                        </ul>
                    </div>
                </div>
        `;
        cart.insertBefore(cartItem,updateBtn);
    
        //subtotal calculation//

        const sum=subTotalcalc();

        //inserting subtotal//

        const subtotalAmount=document.getElementById('subtotal');
        subtotalAmount.textContent=sum;  
        //inserting discount//
        if(cartsItem.checked===true){
            discountEleCreate();
        }
        //inserting grand total//
        let grandtotal=grandTotalcalc();
        const totalAmount=document.getElementById('total');
        totalAmount.textContent=grandtotal;

       
}

     //deleting element from cart//
     const cartSection=document.querySelector('.cart-section');
     const cartSection3=document.querySelector('.cart-section3');
     const bookLink=document.querySelector('.book-link');
     const backButton=document.querySelector('.button');
     const subTotalTotalDiv=document.querySelector('.sub');
     const deleteElement=document.querySelectorAll('.cart-section2');
     let count=deleteElement.length;
     if(count!=0){
        backButton.style.display="none";
     }
     if(cartsItem===null){
        cartSection.parentNode.removeChild(cartSection);
                subTotalTotalDiv.parentNode.removeChild(subTotalTotalDiv);
                updateBtn.parentNode.removeChild(updateBtn);
                bookLink.parentNode.removeChild(bookLink);
                backButton.style.display="block";
    }
     deleteElement.forEach((item)=>{
         item.addEventListener('click',(e)=>{
             if(e.target.classList.contains("fa-times")){
                 item.parentNode.removeChild(item);
                 localStorage.removeItem('courses');
                 count--;
             }

             if(count===0){
                cartSection.parentNode.removeChild(cartSection);
                subTotalTotalDiv.parentNode.removeChild(subTotalTotalDiv);
                updateBtn.parentNode.removeChild(updateBtn);
                bookLink.parentNode.removeChild(bookLink);
                backButton.style.display="block";
             }
         });
     });
    
//updating cart//

updateBtn.addEventListener('click',(e)=>{
    update();
});

//per unit total calculation//

function unitPriceCalc(number){
    let totalString=cartsItem.price.slice(1);
    let total=parseFloat(totalString);
    total=total*number;
    total=total.toFixed(2);
    total=total.toString();
    total='£'+total;
    return total;
}

//subtotal calculation//

function subTotalcalc(){
    const amounts=document.querySelectorAll('.amount');
        let subtotal=[];
        amounts.forEach(function(amount){
            let unitPrice=amount.textContent.slice(1);
            unitPrice=parseFloat(unitPrice);
            subtotal.push(unitPrice);
        });
        let sum=subtotal.reduce((sum,value)=>{
            return sum+value;
        });
        noDiscountSum=sum;
        sum=sum.toString();
        sum='£'+sum;
        return sum;
}

//discount calculation//

function discountcalc(){
   let noDiscountSum=subTotalcalc();
   noDiscountSum=noDiscountSum.slice(1);
   noDiscountSum=parseFloat(noDiscountSum);
   discount=noDiscountSum*(25/100);
   discount=discount.toFixed(2);
   discount=discount.toString();
   discount='£'+discount;
   return discount;
}

//grand total calculation//

function grandTotalcalc(){
    let sum=subTotalcalc();
    let grandtotal=0;
    let discount=discountcalc();
    discount=discount.slice(1);
    discount=parseFloat(discount);
    let noDiscountSum=subTotalcalc();
    noDiscountSum=noDiscountSum.slice(1);
    noDiscountSum=parseFloat(noDiscountSum);
    if(cartsItem.checked===true){
        grandtotal=noDiscountSum-discount;
        grandtotal=grandtotal.toFixed(2);
        grandtotal=grandtotal.toString();
        grandtotal='£'+grandtotal;
        return grandtotal;
}
else{
    grandtotal=sum;
    return grandtotal;
}
}
//creating discount element

function discountEleCreate(){
    const discountParent=document.querySelector('.sub-sec');
    const totalElement=document.querySelector('#totalDiv');
    let discountDiv=document.createElement('div');
    let discount= discountcalc();
        discountDiv.innerHTML=`
        <div class="sub-section">
            <p>Discount<br>(25%)</p>
            <p><span id="discount">-${discount}</span></p>
        </div>
        `;
        discountParent.insertBefore(discountDiv,totalElement);
}

//update function//
function update(){
    const perPrice=document.querySelector('.listtwo2 input[type=number]');
    const total2= unitPriceCalc(perPrice.value);
    const unitAmount=document.querySelector('.amount');
    unitAmount.textContent=total2;
    const sum=subTotalcalc();

    //inserting subtotal//

    const subtotalAmount=document.getElementById('subtotal');
    subtotalAmount.textContent=sum;
    
    //inserting discount//     
    let discount= discountcalc();
    const discountParent=document.querySelector('#discount');
    if(discountParent!=null){
        discountParent.textContent=discount;
    }
    //inserting grand total//
    let grandtotal=grandTotalcalc();
    const totalAmount=document.getElementById('total');
    totalAmount.textContent=grandtotal;

    //updating local storage//
    cartsItem.quant=perPrice.value;
    localStorage.setItem('courses',JSON.stringify(cartsItem));


}