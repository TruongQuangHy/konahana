import React from "react";
import img from "../../assets/img/product.png";
const OurMenu = () => {
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="grid item-center justify-items-center my-8">
            <h1 className="font-PT text-3xl font-bold text-dark relative my-4">
              WHY CHOOSE US
              <div className="absolute w-8 h-[3px] bg-primary top-1/2 -left-9 -rotate-[65deg]"></div>
              <div className="absolute w-8 h-[3px] bg-primary top-1/2 -right-9 -rotate-[65deg]"></div>
            </h1>
            <p className="font-Noto text-textColor text-center my-4 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur. Leo ac morbi sed nisl
              pretium facilsis ligula quis. Semper vitae diam faucibus donec
              orci est. Placerat augue sed facilisi pretium convallis id vel.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-diagonal">
        <div className="container relative mx-auto sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
          <div className="grid">
            <div className="grid grid-cols-2">
              <div className="grid justify-items-start">
                <ul>
                  <li className="flex my-10">
                    <div className="flex items-center px-9 md:px-7 rounded-full bg-primary">
                      <svg
                        className="text-"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_376_218)">
                          <path
                            d="M29.8519 10.9854L24.95 3.10963C24.7709 2.82206 24.4562 2.64722 24.1176 2.64722H5.8825C5.54395 2.64722 5.22925 2.82206 5.05013 3.10963L0.148214 10.9854C-0.0870965 11.3635 -0.0384055 11.8524 0.267159 12.1762L14.2867 27.0451C14.4719 27.2415 14.7301 27.3529 15 27.3529C15.27 27.3529 15.5281 27.2415 15.7134 27.0448L29.7329 12.1762C30.0382 11.852 30.0872 11.3635 29.8519 10.9854ZM15.0001 24.9435L2.21193 11.3805L6.42725 4.60798H23.5732L27.7882 11.3805L15.0001 24.9435Z"
                            fill="white"
                          />
                          <path
                            d="M29.0195 10.5229H0.980469V12.4837H29.0195V10.5229Z"
                            fill="white"
                          />
                          <path
                            d="M10.0706 11.4095L11.5824 3.81906L9.65918 3.43604L8.09057 11.3118C8.05366 11.4981 8.0713 11.6909 8.1419 11.8674L14.0896 26.7365L15.9101 26.0085L10.0706 11.4095Z"
                            fill="white"
                          />
                          <path
                            d="M21.9718 11.2329L20.3378 3.58594L18.4205 3.99574L19.992 11.3496L14.0908 26.0064L15.9094 26.7384L21.9228 11.8042C21.9953 11.6228 22.0126 11.4238 21.9718 11.2329Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_376_218">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="md:w-2/4 lg:w-1/2 w-full ml-4">
                      <h1 className="font-bold text-2xl text-dark font-PT my-1 md:text-xl">
                        Highest quality
                      </h1>
                      <p className="font-Noto text-textColor my-2 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur. Feugiat ac enim
                        sed
                      </p>
                    </div>
                  </li>
                  <li className="flex my-10">
                    <div className="flex items-center px-9 md:px-7 rounded-full bg-primary">
                      <svg
                        className="text-"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.3905 5.83461C17.1362 5.76194 16.8664 5.76194 16.6121 5.83461L9.52878 7.85842C8.92061 8.03219 8.5013 8.58808 8.5013 9.22059V16.8343C8.5013 20.037 10.048 23.0425 12.654 24.904L16.1779 27.4209C16.6705 27.7728 17.3321 27.7728 17.8247 27.4209L21.3486 24.904C23.9546 23.0425 25.5013 20.037 25.5013 16.8343V9.22059C25.5013 8.58808 25.082 8.03219 24.4738 7.85842L17.3905 5.83461ZM15.8337 3.11031C16.5968 2.89227 17.4058 2.89227 18.1689 3.11031L25.2523 5.13411C27.0768 5.65541 28.3346 7.32305 28.3346 9.22059V16.8343C28.3346 20.952 26.3461 24.8161 22.9954 27.2094L19.4715 29.7266C17.9938 30.782 16.0088 30.782 14.5311 29.7266L11.0072 27.2094C7.65653 24.8161 5.66797 20.952 5.66797 16.8343V9.22059C5.66797 7.32305 6.92587 5.65541 8.75041 5.13411L15.8337 3.11031Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.22 11.7167C22.791 12.2518 22.8199 13.1483 22.2846 13.7191L16.9721 19.3857C16.4647 19.9271 15.6255 19.9851 15.0483 19.5187L11.8608 16.9429C11.2522 16.4512 11.1576 15.5593 11.6493 14.9507C12.1411 14.3421 13.033 14.2474 13.6416 14.7392L15.8054 16.4878L20.2177 11.7812C20.7528 11.2105 21.6493 11.1815 22.22 11.7167Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="md:w-2/4 lg:w-1/2 w-full ml-4">
                      <h1 className="font-bold text-2xl text-dark font-PT my-1 md:text-xl">
                        Highest quality
                      </h1>
                      <p className="font-Noto text-textColor my-2 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur. Feugiat ac enim
                        sed
                      </p>
                    </div>
                  </li>
                  <li className="flex my-10">
                    <div className="flex items-center px-9 md:px-7 rounded-full bg-primary">
                      <svg
                        className="text-"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.278 23.65C12.6299 23.65 12.1044 23.1246 12.1044 22.4764C12.1044 17.3232 9.59938 14.8181 4.44606 14.8181C3.79793 14.8181 3.27246 14.2927 3.27246 13.6445C3.27246 12.9964 3.79787 12.4709 4.44606 12.4709C9.59932 12.4709 12.1044 9.96584 12.1044 4.81251C12.1044 4.16439 12.6298 3.63892 13.278 3.63892C13.9261 3.63892 14.4516 4.16432 14.4516 4.81251C14.4516 9.96577 16.9567 12.4709 22.11 12.4709C22.7581 12.4709 23.2836 12.9963 23.2836 13.6445C23.2836 14.2926 22.7582 14.8181 22.11 14.8181C16.9567 14.8181 14.4516 17.3231 14.4516 22.4764C14.4516 23.1246 13.9261 23.65 13.278 23.65ZM9.93354 13.6445C11.3711 14.3817 12.5409 15.5516 13.278 16.9892C14.0151 15.5517 15.185 14.3818 16.6225 13.6447C15.185 12.9076 14.0151 11.7377 13.278 10.3002C12.5409 11.7377 11.3711 12.9075 9.93361 13.6447L9.93354 13.6445Z"
                          fill="white"
                        />
                        <path
                          d="M23.8498 30.5436C23.2017 30.5436 22.6762 30.0182 22.6762 29.37C22.6762 27.8947 22.3235 26.7936 21.6281 26.0981C20.9327 25.4026 19.8318 25.05 18.3562 25.05C17.7081 25.05 17.1826 24.5246 17.1826 23.8764C17.1826 23.2282 17.708 22.7028 18.3562 22.7028C19.8316 22.7028 20.9326 22.3501 21.6281 21.6547C22.3236 20.9593 22.6762 19.8584 22.6762 18.3828C22.6762 17.7347 23.2016 17.2092 23.8498 17.2092C24.498 17.2092 25.0234 17.7346 25.0234 18.3828C25.0234 19.8582 25.376 20.9593 26.0715 21.6547C26.767 22.3501 27.8678 22.7028 29.3434 22.7028C29.9915 22.7028 30.517 23.2282 30.517 23.8764C30.517 24.5246 29.9916 25.05 29.3434 25.05C27.868 25.05 26.7669 25.4027 26.0715 26.0981C25.3761 26.7935 25.0234 27.8944 25.0234 29.37C25.0234 30.0181 24.498 30.5436 23.8498 30.5436ZM22.6233 23.8764C23.0976 24.2141 23.5121 24.6286 23.8498 25.1028C24.1874 24.6285 24.6019 24.214 25.0762 23.8764C24.6019 23.5388 24.1873 23.1243 23.8498 22.65C23.5121 23.1243 23.0976 23.5387 22.6233 23.8764Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="md:w-2/4 lg:w-1/2 w-full ml-4">
                      <h1 className="font-bold text-2xl text-dark font-PT my-1 md:text-xl">
                        Highest quality
                      </h1>
                      <p className="font-Noto text-textColor my-2 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur. Feugiat ac enim
                        sed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src={img}
                alt=""
                className="absolute -top-6 left-[40%] md:w-1/5 w-1/6"
              />
              <div className="grid justify-end">
                <ul>
                  <li className="flex my-10 justify-end">
                    <div className="flex items-center px-7 rounded-full bg-white">
                      <svg
                        width="30text-"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_376_240)">
                          <path
                            d="M29.8519 10.9854L24.95 3.10963C24.7709 2.82206 24.4562 2.64722 24.1176 2.64722H5.8825C5.54395 2.64722 5.22925 2.82206 5.05013 3.10963L0.148214 10.9854C-0.0870965 11.3635 -0.0384055 11.8524 0.267159 12.1762L14.2867 27.0451C14.4719 27.2415 14.7301 27.3529 15 27.3529C15.27 27.3529 15.5281 27.2415 15.7134 27.0448L29.7329 12.1762C30.0382 11.852 30.0872 11.3635 29.8519 10.9854ZM15.0001 24.9435L2.21193 11.3805L6.42725 4.60798H23.5732L27.7882 11.3805L15.0001 24.9435Z"
                            fill="#0099E7"
                          />
                          <path
                            d="M29.0195 10.5229H0.980469V12.4837H29.0195V10.5229Z"
                            fill="#0099E7"
                          />
                          <path
                            d="M10.0711 11.4095L11.5829 3.81906L9.65966 3.43604L8.09106 11.3118C8.05415 11.4981 8.07178 11.6909 8.14239 11.8674L14.0901 26.7365L15.9106 26.0085L10.0711 11.4095Z"
                            fill="#0099E7"
                          />
                          <path
                            d="M21.9718 11.2329L20.3378 3.58594L18.4205 3.99574L19.992 11.3496L14.0908 26.0064L15.9094 26.7384L21.9228 11.8042C21.9953 11.6228 22.0126 11.4238 21.9718 11.2329Z"
                            fill="#0099E7"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_376_240">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="md:w-2/4 lg:w-1/2 w-full ml-4">
                      <h1 className="font-bold text-2xl text-white font-PT my-1  md:text-xl">
                        Highest quality
                      </h1>
                      <p className="font-Noto text-textColorS2 my-2 md text-sm">
                        Lorem ipsum dolor sit amet consectetur. Feugiat ac enim
                        sed
                      </p>
                    </div>
                  </li>
                  <li className="flex my-10 justify-end">
                    <div className="flex items-center px-7 rounded-full bg-white">
                      <svg
                        width="34text-"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.3905 5.83461C17.1362 5.76194 16.8664 5.76194 16.6121 5.83461L9.52878 7.85842C8.92061 8.03219 8.5013 8.58808 8.5013 9.22059V16.8343C8.5013 20.037 10.048 23.0425 12.654 24.904L16.1779 27.4209C16.6705 27.7728 17.3321 27.7728 17.8247 27.4209L21.3486 24.904C23.9546 23.0425 25.5013 20.037 25.5013 16.8343V9.22059C25.5013 8.58808 25.082 8.03219 24.4738 7.85842L17.3905 5.83461ZM15.8337 3.11031C16.5968 2.89227 17.4058 2.89227 18.1689 3.11031L25.2523 5.13411C27.0768 5.65541 28.3346 7.32305 28.3346 9.22059V16.8343C28.3346 20.952 26.3461 24.8161 22.9954 27.2094L19.4715 29.7266C17.9938 30.782 16.0088 30.782 14.5311 29.7266L11.0072 27.2094C7.65653 24.8161 5.66797 20.952 5.66797 16.8343V9.22059C5.66797 7.32305 6.92587 5.65541 8.75041 5.13411L15.8337 3.11031Z"
                          fill="#0099E7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.2196 11.7167C22.7905 12.2518 22.8194 13.1483 22.2842 13.7191L16.9717 19.3857C16.4642 19.9271 15.625 19.9851 15.0478 19.5187L11.8603 16.9429C11.2517 16.4512 11.1571 15.5593 11.6488 14.9507C12.1406 14.3421 13.0326 14.2474 13.6411 14.7392L15.8049 16.4878L20.2172 11.7812C20.7523 11.2105 21.6488 11.1815 22.2196 11.7167Z"
                          fill="#0099E7"
                        />
                      </svg>
                    </div>
                    <div className="md:w-2/4 lg:w-1/2 w-full ml-4">
                      <h1 className="font-bold text-2xl text-white font-PT my-1  md:text-xl">
                        Highest quality
                      </h1>
                      <p className="font-Noto text-textColorS2 my-2 md text-sm">
                        Lorem ipsum dolor sit amet consectetur. Feugiat ac enim
                        sed
                      </p>
                    </div>
                  </li>
                  <li className="flex my-10 justify-end">
                    <div className="flex items-center px-7 rounded-full bg-white">
                      <svg
                        width="34text-"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.278 23.65C12.6299 23.65 12.1044 23.1246 12.1044 22.4764C12.1044 17.3232 9.59938 14.8181 4.44606 14.8181C3.79793 14.8181 3.27246 14.2927 3.27246 13.6445C3.27246 12.9964 3.79787 12.4709 4.44606 12.4709C9.59932 12.4709 12.1044 9.96584 12.1044 4.81251C12.1044 4.16439 12.6298 3.63892 13.278 3.63892C13.9261 3.63892 14.4516 4.16432 14.4516 4.81251C14.4516 9.96577 16.9567 12.4709 22.11 12.4709C22.7581 12.4709 23.2836 12.9963 23.2836 13.6445C23.2836 14.2926 22.7582 14.8181 22.11 14.8181C16.9567 14.8181 14.4516 17.3231 14.4516 22.4764C14.4516 23.1246 13.9261 23.65 13.278 23.65ZM9.93354 13.6445C11.3711 14.3817 12.5409 15.5516 13.278 16.9892C14.0151 15.5517 15.185 14.3818 16.6225 13.6447C15.185 12.9076 14.0151 11.7377 13.278 10.3002C12.5409 11.7377 11.3711 12.9075 9.93361 13.6447L9.93354 13.6445Z"
                          fill="#0099E7"
                        />
                        <path
                          d="M23.8498 30.5436C23.2017 30.5436 22.6762 30.0182 22.6762 29.37C22.6762 27.8947 22.3235 26.7936 21.6281 26.0981C20.9327 25.4026 19.8318 25.05 18.3562 25.05C17.7081 25.05 17.1826 24.5246 17.1826 23.8764C17.1826 23.2282 17.708 22.7028 18.3562 22.7028C19.8316 22.7028 20.9326 22.3501 21.6281 21.6547C22.3236 20.9593 22.6762 19.8584 22.6762 18.3828C22.6762 17.7347 23.2016 17.2092 23.8498 17.2092C24.498 17.2092 25.0234 17.7346 25.0234 18.3828C25.0234 19.8582 25.376 20.9593 26.0715 21.6547C26.767 22.3501 27.8678 22.7028 29.3434 22.7028C29.9915 22.7028 30.517 23.2282 30.517 23.8764C30.517 24.5246 29.9916 25.05 29.3434 25.05C27.868 25.05 26.7669 25.4027 26.0715 26.0981C25.3761 26.7935 25.0234 27.8944 25.0234 29.37C25.0234 30.0181 24.498 30.5436 23.8498 30.5436ZM22.6233 23.8764C23.0976 24.2141 23.5121 24.6286 23.8498 25.1028C24.1874 24.6285 24.6019 24.214 25.0762 23.8764C24.6019 23.5388 24.1873 23.1243 23.8498 22.65C23.5121 23.1243 23.0976 23.5387 22.6233 23.8764Z"
                          fill="#0099E7"
                        />
                      </svg>
                    </div>
                    <div className="md:w-2/4 lg:w-1/2 w-full ml-4">
                      <h1 className="font-bold text-2xl text-white font-PT my-1  md:text-xl">
                        Highest quality
                      </h1>
                      <p className="font-Noto text-textColorS2 my-2 md text-sm">
                        Lorem ipsum dolor sit amet consectetur. Feugiat ac enim
                        sed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMenu;
