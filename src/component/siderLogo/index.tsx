import "./siderLogo.css"


const SiderLogo: React.FC = () => {

    return (
        <div className='side-title' >
            <img src="/nipura-logo-80.png" />
            <div className='small-screen-curtain'>
                <h1>NIPURA</h1>
                <p>業務支援システム</p>
            </div>
        </div>
    );
};

export default SiderLogo;