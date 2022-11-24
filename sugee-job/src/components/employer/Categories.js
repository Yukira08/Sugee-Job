import React from "react";
import './categories.css';


const Categories = () => {
  return (
    <div class="container-fluid m-5">
        <div class="row">
            <div class="col-2"></div>

            <div class="col-8">
            <p class="text-center text-primary bold">WHY SUGEE WORKS?</p>
            <h2 class="text-center text-dark bold">We are experts in recruiting the most suitable people for tech companies.</h2>
            <p class="text-center text-dark bold">We will find you the most suitable talent from the entire japan, for all your company needs.
            From Product, Data, Engineer, Human Resources and many more.</p>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row">
            <div class="col-6" >
            <div><img src={require("../../assets/card1.png")} /></div>

                <h3 class="bold">Product</h3>
                <button class="category-button">UI Designer</button>
                <button class="category-button">Ux Designer</button><br></br>
                <button class="category-button">Interaction designer</button>
                <button class="category-button">UX Researcher</button><br></br>
                <button class="category-button">Graphic Designer</button>
                <button class="category-button">Motion designer</button>
                <p><u>Many More</u></p>
                <button class="category-button big">Browse more</button>


            </div>
            <div class="col-6" >
            <div><img src={require("../../assets/card2.png")} /></div>

                <h3 class="bold">Engineer</h3>
                <button class="category-button">Frontend Engineer</button>
                <button class="category-button">backend engineer</button><br></br>
                <button class="category-button">fullstack engineer</button>
                <button class="category-button">mobile engineer</button><br></br>
                <button class="category-button">quality assurance</button>
                <button class="category-button">network engineer</button>
                <p><u>Many More</u></p>
                <button class="category-button big">Browse more</button>


            </div>
        </div>
        <div class="row">
            <div class="col-6" >
            <div><img src={require("../../assets/card3.png")} /></div>

                <h3 class="bold">Data</h3>
                <button class="category-button">UI Designer</button>
                <button class="category-button">Ux Designer</button><br></br>
                <button class="category-button">Interaction designer</button>
                <button class="category-button">UX Researcher</button><br></br>
                <button class="category-button">Graphic Designer</button>
                <button class="category-button">Motion designer</button>
                <p><u>Many More</u></p>
                <button class="category-button big">Browse more</button>


            </div>
            <div class="col-6" >
            <div><img src={require("../../assets/card4.png")} /></div>

                <h3 class="bold">Operation & Human Resources</h3>
                <button class="category-button">UI Designer</button>
                <button class="category-button">Ux Designer</button><br></br>
                <button class="category-button">Interaction designer</button>
                <button class="category-button">UX Researcher</button><br></br>
                <button class="category-button">Graphic Designer</button>
                <button class="category-button">Motion designer</button>
                <p><u>Many More</u></p>
                <button class="category-button big">Browse more</button>


            </div>
        </div>


     
    </div>
     
  );
};

export default Categories;
