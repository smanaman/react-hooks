import Card from "../components/Card"

function Home() {
    const data=[
        {
            title:'man clothe',
            dis:'This is a simple card with an image',
            image:'https://m.media-amazon.com/images/I/71lHkDkKYgL._AC_UY1100_.jpg'
        },
        {
            title:'women clothe',
            dis:'This is a simple card with an image',
            image:'https://assets.ajio.com/medias/sys_master/root/20230624/Pv4v/64962effa9b42d15c9d54300/-473Wx593H-465144958-black-MODEL3.jpg'
        }
    ]
    console.log(data);
    
    return(
        <>
        {
            data.map((val,index)=>{
                
        return <Card title={val.title} dis={val.dis} image={val.image}/>
                
})
        }
        </>
    )
}
export default Home