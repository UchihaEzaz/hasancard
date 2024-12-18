let pen = document.querySelector('.pen');
let show = document.querySelector('.show');

pen.addEventListener('mouseenter',()=>{
    gsap.to(show,{
        duration:0.5,
        opacity:1,
    })
})
pen.addEventListener('mouseleave',()=>{
    gsap.to(show,{
        opacity:0,
        duration:0.5,
    })
})
let pen1 = document.querySelector('.pen1');
let show1 = document.querySelector('.show1');
pen1.addEventListener('mouseenter',()=>{
    gsap.to(show1,{
        duration:0.5,
        opacity:1,
    })
})
pen1.addEventListener('mouseleave',()=>{
    gsap.to(show1,{
        opacity:0,
        duration:0.5,
    })
})

let pen2 = document.querySelector('.pen2');
let show2 = document.querySelector('.show2');
pen2.addEventListener('mouseenter',()=>{
    gsap.to(show2,{
        duration:0.5,
        opacity:1,
    })
})
pen2.addEventListener('mouseleave',()=>{
    gsap.to(show2,{
        opacity:0,
        duration:0.5,
    })
})
let pen3 = document.querySelector('.pen3');
let show3 = document.querySelector('.show3');

pen3.addEventListener('mouseenter',()=>{
    gsap.to(show3,{
        duration:0.5,
        opacity:1,
    })
})
pen3.addEventListener('mouseleave',()=>{
    gsap.to(show3,{
        opacity:0,
        duration:0.5,
    })
})
// API

let input = document.querySelector('input');
let search = document.querySelector(".search");



search.addEventListener('click',()=>{
    let input_value = input.value;
    // let input_value = toLowerCase(input_value1)
    if(input_value === ''){
        alert('please input Any Text')
    }
    else{
        fetch(`https://f24-1-mid-1.vercel.app/content?category=${input_value}`)
        .then(res=>res.json())
        .then(data=>search_cart(data))
    }
    input.value='';
})

let search_cart = (value)=>{
    let container = document.querySelector('.container');
    for(const values of value){
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="min-h-[25vh] bg-base-100 rounded-2xl flex gap-8 p-3 bg-opacity-50 backdrop-blur-xl">
           <div class="h-[100px] w-[100px] rounded-full relative">
                ${values.isActive === true ? '<div class="h-3 w-3 bg-green-600 absolute rounded-full top-[12px] right-[6px]"></div>' : '<div class="h-3 w-3 bg-gray-600 absolute rounded-full top-[12px] right-[6px]"></div>'}
                <img class="h-[100px] w-[100px] rounded-full bg-cover" src="${values.image}" >
           </div>
           <div class="flex flex-col gap-5">
              <div class="flex gap-3">
              <h1>${values.category}</h1>
              <h1>${values.author.name}</h1>
              </div>
              <h1>${values.title}</h1>
              <h1>${values.description}</h1>
              <div class="flex gap-3 items-center justify-between">
              <h1>com:${values.comment_count}</h1>
              <h1>view:${values.view_count}</h1>
              <h1>${values.posted_time} hr</h1> 
              <button class="btn btn-active btn-ghost" onclick='ja(${JSON.stringify(values)})'>Add</button> 
              </div>
           </div>
        </div> 
        
        `
        container.appendChild(div);
    }
    
}


let loaddata = ()=>{
    fetch('https://f24-1-mid-1.vercel.app/content')
    .then(res=>res.json())
    .then(data=>showdata(data))
}
let showdata = (data)=>{
    let container = document.querySelector('.container');
    for(const content of data){
        let newdiv = document.createElement('div');
        newdiv.innerHTML = `
        <div class="lg:h-[38vh] bg-white rounded-2xl flex gap-8 p-3 bg-opacity-50 backdrop-blur-xl md:h-[42vh] coredura">
           <div class="h-[100px] w-[100px] rounded-full relative">
                ${content.isActive === true ? '<div class="h-3 w-3 bg-green-600 absolute rounded-full top-[12px] right-[6px]"></div>' : '<div class="h-3 w-3 bg-gray-600 absolute rounded-full top-[12px] right-[6px]"></div>'}
                <img class="h-[70px] w-[80px] rounded-full bg-cover" src="${content.image}" >
           </div>
           <div class="flex flex-col gap-5">
              <div class="flex gap-3">
              <h1>${content.category}</h1>
              <h1>${content.author.name}</h1>
              </div>
              <h1>${content.title}</h1>
              <h1>${content.description}</h1>
              <div class="flex gap-3 items-center justify-between">
              <h1>com:${content.comment_count}</h1>
              <h1>view:${content.view_count}</h1>
              <h1>${content.posted_time} hr</h1> 
              <button class="btn btn-active btn-ghost" onclick='Add(${JSON.stringify(content)})'>Add</button> 
              </div>
           </div>
        </div>
        `
        container.appendChild(newdiv);
    }
}

loaddata();



let Add = (cliked)=>{
    let nasa = document.querySelector('.Nasa')
    let numsho = document.querySelector('.numsho')
    let lesdiv = document.createElement('div')
    lesdiv.innerHTML = `
    <h1>${cliked.title}</h1>
    <h1>${cliked.view_count}</h1>
    `
    lesdiv.setAttribute('class','cas')
    nasa.appendChild(lesdiv)
    numsho.innerText = nasa.childElementCount;
}

let ja = (cliked)=>{
    let nasa = document.querySelector('.Nasa')
    let numsho = document.querySelector('.numsho')
    let lesdiv = document.createElement('div')
    lesdiv.innerHTML = `
    <h1>${cliked.title}</h1>
    <h1>${cliked.view_count}</h1>
    `
    lesdiv.setAttribute('class','cas')
    nasa.appendChild(lesdiv)
    numsho.innerText = nasa.childElementCount;
}


//blogs

let horizon = ()=>{
    fetch('https://f24-1-mid-1.vercel.app/blogs')
    .then(res=>res.json())
    .then(data=>Resident(data))
}

let Resident = (evil)=>{
    let blog = document.querySelector('.blog')
    
    for(const evlis of evil){
        let condiv = document.createElement('div');
        condiv.innerHTML = `
        <div class="bg-black h-[400px] bg-opacity-40 backdrop-blur-sm  rounded-lg pl-3 pr-3 pt-3 pb-3 glass-card">
        <img class="rounded-full" src="${evlis.profile_image}" alt="">
        <div>
        <h1>${evlis.author.posted_date || 'UnKnown'}</h1>
        <h1>${evlis.title || 'UnKnown'}</h1>
        <h1>${evlis.description || 'UnKnown'}</h1>
        <h1>${evlis.author.name || 'UnKnown'}</h1>
        <h1>${evlis.author.designation || 'UnKnown'}</h1>
        </div>
        </div>
        `
        blog.appendChild(condiv)
    }
}

horizon()