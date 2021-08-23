export default function Menubar(){
    return (
        <div className="row bg-black-custom text-white">
            <div className="border-bottom p-3 d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                    <div className="px-2">
                        <i className="fa fa-bars menu-icons"></i>
                    </div>
                    <div className="px-2">
                        <i className="fa fa-search menu-search-icon"></i>
                        <input className="menu-search" id="search" name="search" placeholder="Search securities, transactions, info or help"/>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="px-2">
                        <i className="fa fa-cog menu-icons"></i>
                    </div>
                    <div className="menu-separator px-2">
                        <i className="fa fa-bell menu-icons"></i> 
                    </div>
                    <div className="px-2">
                        <span className="menu-username menu-icons">Brad Gibson</span>
                    </div>
                    <div className="px-2">
                        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt=""  className="avatar-menu"/>
                    </div>

                </div>
                
            </div>

        </div>

    )
}