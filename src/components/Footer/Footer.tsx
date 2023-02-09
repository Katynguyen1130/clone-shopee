import React from 'react'
import { logo } from 'src/assets/logo/logo'

function Footer() {
  return (
    <footer className='py-16 bg-neutral-100'>
      {/* section 1 of footer */}
      <div className='flex flex-row mx-auto text-xs max-w-7xl pb-6 overflow-hidden text-black/60 border border-x-0 border-t-0 border-gray-300'>
        {/* Customer service ________________*/}
        <div className='flex-1 min-w-[240px] px-6'>
          <div className='flex flex-col text-md text-black/90 mb-4'>CUSTOMER SERVICE</div>
          <ul>
            <li className='footerLink'>
              <a href='https://help.shopee.vn/portal' title='' target='_blank' rel='noopener noreferrer'>
                <span>Help Centre</span>
              </a>
            </li>
            <li className='footerLink'>
              <a href='https://shopee.vn/blog/' title='' target='_blank' rel='noopener noreferrer'>
                <span>Shopee Blog</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79090-[Th%C3%A0nh-vi%C3%AAn-m%E1%BB%9Bi]-Shopee-Mall-l%C3%A0-g%C3%AC?previousPage=search%20recommendation%20bar'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Shopee Mall</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79180-[Th%c3%a0nh-vi%c3%aan-m%e1%bb%9bi]-L%c3%a0m-sao-%c4%91%e1%bb%83-mua-h%c3%a0ng-%2F-%c4%91%e1%ba%b7t-h%c3%a0ng-tr%c3%aan-%e1%bb%a9ng-d%e1%bb%a5ng-Shopee%3F'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>How To Buy</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://banhang.shopee.vn/edu/article/13243/ban-hang-online-bat-dau-tu-dau'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>How To Sell</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/category/59-Thanh-To%C3%A1n/708-V%C3%AD-ShopeePay?page=1'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Payment</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79144-[Shopee-Xu]-C%c3%a1c-c%c3%a2u-h%e1%bb%8fi-th%c6%b0%e1%bb%9dng-g%e1%ba%b7p'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Shopee Coins</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/category/60-%C4%90%C6%A1n-H%C3%A0ng-V%E1%BA%ADn-Chuy%E1%BB%83n/703-%C4%90%C6%A1n-h%C3%A0ng?page=1'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Shipping</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79258-Tr%e1%ba%a3-h%c3%a0ng%2FHo%c3%a0n-ti%e1%bb%81n]-C%e1%ba%a9m-nang-Tr%e1%ba%a3-h%c3%a0ng-ho%c3%a0n-ti%e1%bb%81n'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Return &amp; Refund</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79191-%5BD%E1%BB%8Bch-v%E1%BB%A5%5D-L%C3%A0m-sao-%C4%91%E1%BB%83-li%C3%AAn-h%E1%BB%87-Ch%C4%83m-s%C3%B3c-Kh%C3%A1ch-h%C3%A0ng'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Contact Us</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79046-[Quy-%c4%91%e1%bb%8bnh]-Ch%c3%adnh-s%c3%a1ch-b%e1%ba%a3o-h%c3%a0nh-cho-s%e1%ba%a3n-ph%e1%ba%a9m-mua-t%e1%ba%a1i-Shopee'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Warranty Policy</span>
              </a>
            </li>
          </ul>
        </div>
        {/* About shopee _____________ */}
        <div className='flex-1  min-w-[240px] px-6'>
          <div className='flex flex-col text-md text-black/90 mb-4'>ABOUT SHOPEE</div>
          <ul>
            <li className='footerLink'>
              <a href='https://help.shopee.vn/portal' title='' target='_blank' rel='noopener noreferrer'>
                <span>About us</span>
              </a>
            </li>
            <li className='footerLink'>
              <a href='https://shopee.vn/blog/' title='' target='_blank' rel='noopener noreferrer'>
                <span>Shopee Careers</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79090-[Th%C3%A0nh-vi%C3%AAn-m%E1%BB%9Bi]-Shopee-Mall-l%C3%A0-g%C3%AC?previousPage=search%20recommendation%20bar'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Shopee Polycies</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79180-[Th%c3%a0nh-vi%c3%aan-m%e1%bb%9bi]-L%c3%a0m-sao-%c4%91%e1%bb%83-mua-h%c3%a0ng-%2F-%c4%91%e1%ba%b7t-h%c3%a0ng-tr%c3%aan-%e1%bb%a9ng-d%e1%bb%a5ng-Shopee%3F'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Privacy Policy</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://banhang.shopee.vn/edu/article/13243/ban-hang-online-bat-dau-tu-dau'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Shopee Mall</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/category/59-Thanh-To%C3%A1n/708-V%C3%AD-ShopeePay?page=1'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Seller Center</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79144-[Shopee-Xu]-C%c3%a1c-c%c3%a2u-h%e1%bb%8fi-th%c6%b0%e1%bb%9dng-g%e1%ba%b7p'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Flash deals</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/category/60-%C4%90%C6%A1n-H%C3%A0ng-V%E1%BA%ADn-Chuy%E1%BB%83n/703-%C4%90%C6%A1n-h%C3%A0ng?page=1'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Shopee Ambassador Programme</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://help.shopee.vn/portal/article/79258-Tr%e1%ba%a3-h%c3%a0ng%2FHo%c3%a0n-ti%e1%bb%81n]-C%e1%ba%a9m-nang-Tr%e1%ba%a3-h%c3%a0ng-ho%c3%a0n-ti%e1%bb%81n'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Media Contact</span>
              </a>
            </li>
          </ul>
        </div>
        {/* ________________ */}

        {/* payment and logistic */}
        <div className='flex min-w-[240px] flex-1 px-6 flex-col justify-between'>
          {/* payment  */}
          <div>
            <div className='text-md text-black/90 mb-4'>PAYMENTS</div>
            <ul className='w-full flex flex-row flex-wrap gap-x-4 gap-y-2'>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/a0a9062ebe19b45c1ae0506f16af5c16' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/bc2a874caeee705449c164be385b796c' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/2c46b83d84111ddc32cfd3b5995d9281' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/5e3f0bee86058637ff23cfdf2e14ca09' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/9263fa8c83628f5deff55e2a90758b06' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/0217f1d345587aa0a300e69e2195c492' alt='logo' />
                </a>
              </li>
            </ul>
          </div>
          {/* logistic */}
          <div>
            <div className='text-md text-black/90 mb-4'>LOGISCTICS</div>
            <ul className='w-full flex flex-row flex-wrap gap-x-4 gap-y-2'>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/5e7282bd0f7ee0872fdb0bd1d40fbe9e' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/d10b0ec09f0322f9201a4f3daf378ed2' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/77bf96a871418fbc21cc63dd39fb5f15' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/59270fb2f3fbb7cbc92fca3877edde3f' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/957f4eec32b963115f952835c779cd2c' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/0d349e22ca8d4337d11c9b134cf9fe63' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/3900aefbf52b1c180ba66e5ec91190e5' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/6e3be504f08f88a15a28a9a447d94d3d' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/b8348201b4611fc3315b82765d35fc63' alt='logo' />
                </a>
              </li>
              <li className='w-[52px] h-[22px]'>
                <a target='_blank' rel='noopener noreferrer'>
                  <img src='https://cf.shopee.vn/file/0b3014da32de48c03340a4e4154328f6' alt='logo' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* follow us______________ */}
        <div className='flex-1  min-w-[240px] px-6'>
          <div className='flex flex-col text-md text-black/90 mb-4'>FOLLOW US</div>
          <ul>
            <li className='footerLink flex flex-row'>
              <a
                href='https://www.facebook.com/ShopeeVN'
                className='flex flex-row'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='https://cf.shopee.vn/file/2277b37437aa470fd1c71127c6ff8eb5' />
                <span className='ml-1'>Facebook</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://instagram.com/Shopee_VN'
                className='flex flex-row'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='https://cf.shopee.vn/file/5973ebbc642ceee80a504a81203bfb91' />
                <span className='ml-1'>Instagram</span>
              </a>
            </li>
            <li className='footerLink'>
              <a
                href='https://www.linkedin.com/company/shopee'
                className='flex flex-row'
                title=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='https://cf.shopee.vn/file/f4f86f1119712b553992a75493065d9a' />
                <span className='ml-1'>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Download APP_____________ */}
        <div className='flex-2  min-w-[240px] px-6'>
          <div className='flex flex-col text-md text-black/90 mb-4'>SHOPEE APP DOWNLOAD</div>
          <div className='flex flex-row'>
            <a href='https://shopee.vn/web' target='_blank' rel='noopener noreferrer'>
              <img src='https://cf.shopee.vn/file/a5e589e8e118e937dc660f224b9a1472' alt='download_qr_code' />
            </a>
            <div className='flex flex-col'>
              <a href='https://shopee.vn/web' target='_blank' rel='noopener noreferrer'>
                <img src='https://cf.shopee.vn/file/ad01628e90ddf248076685f73497c163' alt='app' />
              </a>
              <a href='https://shopee.vn/web' target='_blank' rel='noopener noreferrer'>
                <img src='https://cf.shopee.vn/file/ae7dced05f7243d0f3171f786e123def' alt='app' />
              </a>
              <a href='https://shopee.vn/web' target='_blank' rel='noopener noreferrer'>
                <img src='https://cf.shopee.vn/file/35352374f39bdd03b25e7b83542b2cb0' alt='app' />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* section 2</footer> */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 max-w-7xl  mx-auto '>
        <div className='lg:col-span-1'>
          <div className='text-gray-600'>© 2023 Shopee. All Rights Reserved.</div>
        </div>
        <div className='lg:col-span-2'>
          <div className='text-gray-600 text-sm flex flex-row flex-wrap'>
            <div className='border inline-block border-gray-300 px-2 py-0 border-y-0 border-l-0'>
              Country & Region: Singapore
            </div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>Indonesia</div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>Taiwan</div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>Thailand</div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>Malaysia</div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>Vietnam</div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>Philipines</div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>Brazil</div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>México</div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>Colombia</div>
            <div className='border border-gray-300 px-1 py-0 border-y-0 border-l-0'>Chile</div>
            <div className=' px-1 py-0 border-y-0 border-l-0'>Poland</div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className=' flex flex-row max-w-7xl justify-center text-sm text-gray-500 mt-12 mx-auto'>
        <div className='border border-gray-300 px-6 border-y-0 border-l-0'>PRIVACY</div>
        <div className='border border-gray-300 px-6 border-y-0 border-l-0'>POLICY</div>
        <div className='border border-gray-300 px-6 border-y-0 border-l-0'>TERM OF SERVICE</div>
        <div className='border border-gray-300 px-6 border-y-0 border-l-0'>SHIPPING POLICY</div>
        <div className='px-6'>VIOLATION</div>
      </div>
      <div className='flex flex-row space-x-4 mt-12 mx-auto max-w-7xl items-center justify-center'>
        <div className=' flex flex-row space-x-4 '>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=18375'
          >
            <img src={logo.logo3} />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='http://online.gov.vn/HomePage/AppDisplay.aspx?DocId=29'>
            <img src={logo.logo3} />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://shopee.vn/docs/170'>
            <img src={logo.logo1} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
