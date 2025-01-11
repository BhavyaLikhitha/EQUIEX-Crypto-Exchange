import "./footer.css";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
   
    <div className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">Equi<span className="highlight">Ex</span></h2>
          <div className="footer-social-icons">
      
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M11.666,2.005C6.62,2.17,2.374,6.251,2.025,11.288c-0.369,5.329,3.442,9.832,8.481,10.589V14.65H8.892 c-0.726,0-1.314-0.588-1.314-1.314v0c0-0.726,0.588-1.314,1.314-1.314h1.613v-1.749c0-2.896,1.411-4.167,3.818-4.167 c0.357,0,0.662,0.008,0.921,0.021c0.636,0.031,1.129,0.561,1.129,1.198v0c0,0.663-0.537,1.2-1.2,1.2h-0.442 c-1.022,0-1.379,0.969-1.379,2.061v1.437h1.87c0.591,0,1.043,0.527,0.953,1.111l-0.108,0.701c-0.073,0.47-0.477,0.817-0.953,0.817 h-1.762v7.247C18.235,21.236,22,17.062,22,12C22,6.366,17.341,1.821,11.666,2.005z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 4.4042969 3 C 3.7572969 3 3.3780469 3.7287656 3.7480469 4.2597656 L 9.7363281 12.818359 L 3.7246094 19.845703 C 3.3356094 20.299703 3.6578594 21 4.2558594 21 L 4.9199219 21 C 5.2129219 21 5.4916406 20.871437 5.6816406 20.648438 L 10.919922 14.511719 L 14.863281 20.146484 C 15.238281 20.680484 15.849953 21 16.501953 21 L 19.835938 21 C 20.482937 21 20.862187 20.272188 20.492188 19.742188 L 14.173828 10.699219 L 19.900391 3.9902344 C 20.232391 3.6002344 19.955359 3 19.443359 3 L 18.597656 3 C 18.305656 3 18.027891 3.1276094 17.837891 3.3496094 L 12.996094 9.0097656 L 9.3945312 3.8554688 C 9.0205313 3.3194687 8.4098594 3 7.7558594 3 L 4.4042969 3 z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M3 11L21 4 18 20 13 17 9.875 18.5 8 14z" opacity=".3"></path><path d="M21.45,3.377c-0.485-0.415-1.209-0.492-1.935-0.205c-0.45,0.177-7.501,3.144-14.074,5.911L3.27,9.997c-0.841,0.341-1.267,0.894-1.267,1.641c0,0.523,0.222,1.234,1.278,1.652l3.667,1.467c0.317,0.951,1.053,3.159,1.238,3.746c0.11,0.348,0.388,1.225,1.09,1.43c0.144,0.049,0.294,0.074,0.447,0.074c0.443,0,0.762-0.206,0.918-0.326l2.329-1.97l2.831,2.617C15.91,20.439,16.486,21,17.261,21c0.967,0,1.701-0.805,1.854-1.584c0.083-0.427,2.812-14.129,2.812-14.127C22.172,4.19,21.733,3.62,21.45,3.377z M17.166,18.866l-4.137-3.826l-3.03,2.565c-0.359-1.107-1.301-3.922-1.301-3.922l-0.146-0.439l-4.021-1.608l1.687-0.709c4.299-1.81,11.956-5.033,13.692-5.755C19.533,7.062,17.478,17.379,17.166,18.866z"></path><path d="M16.8,8c-0.125,0-0.294,0.119-0.384,0.175c-1.288,0.803-7.746,4.478-9.517,5.484C7.398,13.859,7.75,14,7.75,14s1.151,3.445,1.39,4.2c0.239,0.756,0.431,0.774,0.431,0.774c0.053,0.023,0.105,0.032,0.153,0.032c0.039,0,0.066-0.014,0.099-0.023L11,14.375c0,0,5.363-5.428,5.686-5.744C16.946,8.378,17,8.289,17,8.201C17,8.084,16.939,8,16.8,8z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 14 3 C 12.300781 3 11 4.414063 11 6 L 11 8.03125 C 8.882813 8.175781 6.976563 8.785156 5.4375 9.71875 C 4.878906 9.28125 4.21875 9.03125 3.5625 9.03125 C 2.835938 9.03125 2.128906 9.308594 1.625 9.875 C 0.667969 11.070313 0.753906 13.023438 2.09375 14.03125 C 2.03125 14.347656 2 14.667969 2 15 C 2 17.054688 3.242188 18.84375 5.0625 20.0625 C 6.882813 21.28125 9.320313 22 12 22 C 14.679688 22 17.117188 21.28125 18.9375 20.0625 C 20.757813 18.84375 22 17.054688 22 15 C 22 14.667969 21.9375 14.347656 21.875 14.03125 C 23.238281 12.945313 23.378906 11.003906 22.375 9.875 C 21.871094 9.308594 21.164063 9.03125 20.4375 9.03125 C 19.78125 9.03125 19.121094 9.28125 18.5625 9.71875 C 17.023438 8.785156 15.117188 8.175781 13 8.03125 L 13 6 C 13 5.386719 13.300781 5 14 5 C 14.320313 5 14.773438 5.171875 15.53125 5.4375 C 16.203125 5.671875 17.09375 5.914063 18.25 5.96875 C 18.589844 6.585938 19.25 7 20 7 C 21.101563 7 22 6.101563 22 5 C 22 3.898438 21.101563 3 20 3 C 19.273438 3 18.632813 3.382813 18.28125 3.96875 C 17.394531 3.925781 16.769531 3.765625 16.1875 3.5625 C 15.519531 3.328125 14.878906 3 14 3 Z M 20 4 C 20.601563 4 21 4.398438 21 5 C 21 5.601563 20.601563 6 20 6 C 19.398438 6 19 5.601563 19 5 C 19 4.398438 19.398438 4 20 4 Z M 12 10 C 14.320313 10 16.382813 10.636719 17.8125 11.59375 C 19.242188 12.550781 20 13.753906 20 15 C 20 16.246094 19.242188 17.449219 17.8125 18.40625 C 16.382813 19.363281 14.320313 20 12 20 C 9.679688 20 7.617188 19.363281 6.1875 18.40625 C 4.757813 17.449219 4 16.246094 4 15 C 4 13.753906 4.757813 12.550781 6.1875 11.59375 C 7.617188 10.636719 9.679688 10 12 10 Z M 3.59375 10.03125 C 3.925781 10.03125 4.277344 10.101563 4.59375 10.28125 C 3.628906 11.023438 2.878906 11.9375 2.4375 12.96875 C 1.855469 12.28125 1.867188 11.191406 2.375 10.53125 C 2.671875 10.195313 3.121094 10.03125 3.59375 10.03125 Z M 20.40625 10.03125 C 20.878906 10.03125 21.328125 10.195313 21.625 10.53125 C 22.117188 11.085938 22.15625 12.175781 21.5625 12.9375 C 21.121094 11.914063 20.363281 11.019531 19.40625 10.28125 C 19.722656 10.101563 20.074219 10.03125 20.40625 10.03125 Z M 9 12 C 8.171875 12 7.5 12.671875 7.5 13.5 C 7.5 14.328125 8.171875 15 9 15 C 9.828125 15 10.5 14.328125 10.5 13.5 C 10.5 12.671875 9.828125 12 9 12 Z M 15 12 C 14.171875 12 13.5 12.671875 13.5 13.5 C 13.5 14.328125 14.171875 15 15 15 C 15.828125 15 16.5 14.328125 16.5 13.5 C 16.5 12.671875 15.828125 12 15 12 Z M 16.09375 16.40625 C 15.195313 17.207031 13.699219 17.6875 12 17.6875 C 10.300781 17.6875 8.804688 17.199219 7.90625 16.5 C 8.40625 17.800781 10 19 12 19 C 14 19 15.59375 17.804688 16.09375 16.40625 Z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z"></path>
</svg>
          </div>
        </div>

  
        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-section">
            <h3>{t('footer.products')}</h3>
            <ul>
              <li>{t('footer.buyAndSell')}</li>
              <li>{t('footer.compareCoins')}</li>
              <li>{t('footer.blogs')}</li>
              <li>{t('footer.nftMarketplace')}</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t('footer.support')}</h3>
            <ul>
              <li>{t('footer.faqs')}</li>
              <li>{t('footer.helpCenter')}</li>
              <li>{t('footer.chatbot')}</li>
              <li>{t('footer.userFeedback')}</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t('footer.learnAndEarn')}</h3>
            <ul>
              <li>{t('footer.blockchain')}</li>
              <li>{t('footer.bitcoin')}</li>
              <li>{t('footer.ethereum')}</li>
              <li>{t('footer.nft')}</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 EquiEX</p>
      </div>
    </div>
  );
}

export default Footer