import { useLanguage } from "../context/LanguageContext";

export default function Proces() {

const {lang}=useLanguage();


const process = {
es:[
{
number:"01",
title:"Descubrimiento",
text:"Analizo el contexto del negocio, usuarios y objetivos del producto para identificar oportunidades de mejora."
},
{
number:"02",
title:"Definición del problema",
text:"Transformo necesidades en problemas claros, priorizando soluciones que generen valor para usuarios y negocio."
},
{
number:"03",
title:"Diseño de experiencia",
text:"Creo flujos, arquitectura de información y prototipos enfocados en reducir fricción y mejorar la experiencia."
},
{
number:"04",
title:"Diseño UI y entrega",
text:"Diseño interfaces escalables, sistemas de diseño y entregables preparados para desarrollo."
}
],

en:[
{
number:"01",
title:"Discovery",
text:"I analyze business context, users and product goals to identify improvement opportunities."
},
{
number:"02",
title:"Problem definition",
text:"I transform needs into clear problems, prioritizing solutions that create value for users and business."
},
{
number:"03",
title:"Experience design",
text:"I create user flows, information architecture and prototypes focused on reducing friction."
},
{
number:"04",
title:"UI Design & Delivery",
text:"I design scalable interfaces, design systems and development-ready deliverables."
}
]

};


return (

<section id="process" className="py-32 bg-white">

<div className="max-w-7xl mx-auto px-6">


<h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
{
lang==="es"
?"Mi proceso de diseño"
:"My design process"
}
</h2>


<p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto text-lg">

{
lang==="es"
?"Un enfoque centrado en usuarios, negocio y tecnología para crear productos digitales escalables."
:"A user, business and technology-driven approach to create scalable digital products."
}

</p>


<div className="grid md:grid-cols-4 gap-6 mt-16">


{
process[lang].map((item,index)=>(

<div 
key={index}
className="p-6 rounded-3xl bg-gray-50 border border-gray-100"
>

<span className="text-blue-600 font-bold text-xl">
{item.number}
</span>


<h3 className="text-xl font-bold mt-4 text-gray-900">
{item.title}
</h3>


<p className="text-gray-600 mt-3 leading-relaxed">
{item.text}
</p>


</div>

))
}


</div>

</div>

</section>

)

}