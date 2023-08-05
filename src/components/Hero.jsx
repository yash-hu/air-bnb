import tourist from '../images/tourist.png'


export const Hero = ()=>{
    return (
        <section className='hero'>
            <img src={tourist} alt="tourist" className='hero-img'/>
            <h1 className='hero-header'>Online Experience</h1>
            <p className='hero-text'> Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}