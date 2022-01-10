import React from 'react'

const MenuCard = ({menuData}) => {

    return (
        <>
               {menuData.map((customElements)=>{

                   return(

    <section className='main-card--cointainer'>                                            
<div className='card-container'>

<div className="card">
  <div className='card-body'>
    <span className='card-number card-circle subtle'>{customElements.id}</span>
    <span className='card-author subtle'>{customElements.id}</span>
    <span className='card-title'>{customElements.name}</span>
    <span className='card-descrription subtle'>i love maggi realy oo yues ipsum dolor sit amet consectetur
    adipisicing  elite .blanditiis at consecteture asipisicing elit blanditiis at totom voluptatibus  quibusdam iusto 
    .accusamus quas , soluta ipsum autem eius necessitatibus fugiat in.</span>
    <div className='card-read'>Read</div>
       <img src={customElements.Image} alt='images' className='card-media'></img> 
    <span className='card-tag subtle'>Order Now</span>
  </div>
</div>
</div> 
</section>

                   )

               })}


      
        </>
    )
}

export default MenuCard
