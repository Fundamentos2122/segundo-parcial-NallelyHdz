const Ingredientname = document.getElementById("ingredient-name");
const IngredientList = document.getElementById("ingredient-temp-list");
const keylist ="ingredientTempList"
const Name =document.getElementsByName("tittle")
document.addEventListener("DOMContentLoaded", function(){
    
    IngredientList.addEventListener("ing-list", ingList);
    NewIng();
});

function ingList(e){
    e.preventDefault();
    e.stopPropagation();

    let NewIng ={
        id: Date.now(),
        text: Ingredientname["ingredient-name"].value
    };

    let list = getIngredient();

    list.push(NewIng);

    localStorage.setItem(keylist, JSON.stringify(list));

    NewIng();
    
}

function NewIng(){
    let list = getIngredient();

    let html = '';

    for(var i = 0; i < list.lenght; i++){
        html += 
            `<li class="[ bg-white color-gray ]">
                        Ingrediente 1
                        <button class="close" type="button(${list[i].id})" >X</button>
                    </li>`;
    }

    IngredientList.innerHTML = html;
}

function getIngredient(){
    let list = JSON.parse(localStorage.getItem(keylist));


    if(list === null){
        return[];
    }
    else{
    return list;
    }
}

function deletIngredient(id){
    let list =getIngredient();

    list = list.filter(i => i.id !== id);

    localStorage.setItem(keylist, JSON.stringify(list));

    let NewIng = document.getElementById(id);

    NewIng.className += 'btn';
    setTimeout(() =>{
    NewIng.remove();
    }, 300);
}