import './Menu.css'

const Menu=()=>{
    return(
        <div className='menu-wrap d-flex flex-column justify-content-between'>
            <div>
                <div className='my-3 ml-3'>Spotify </div>
                <div className='my-3 ml-3'>Home</div>
                <div className='my-3 ml-3'>Search</div>
                <div className='my-3 ml-3'>Your library</div>
            </div>
            <div className='my-3 mx-3 rounded'><button >Sign in</button> </div>
        </div>
    )
}


export default Menu