import Image from "next/image";
import cr7 from "@/assets/image/cr7.png";
import woman from "@/assets/image/healthy-woman.png";
import products from "@/assets/svg/products.svg";
import React from "react";

interface AboutProps {
  params: {
    user: string;
  };
}

export default function About({ params }: AboutProps) {
  return (
    <>
      <section className="flex flex-col gap-6 ">
        <h2 className="font-semibold text-primary text-3xl">
          O que é a Herbalife?
        </h2>
        <div className="flex items-center gap-4 flex-wrap-reverse sm:flex-nowrap">
          <article className="flex flex-col gap-3 w-full sm:w-1/2 lg:w-2/3 self-start min-h-[200px]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            {params.user}
          </article>
          <div className="flex justify-center items-center w-full sm:w-1/2 lg:w-1/3 ">
            <svg
              className="sm:absolute scale-105 sm:scale-90 lg:scale-100 -translate-y-4 h-full"
              width="371"
              height="382"
              viewBox="0 0 371 382"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="logo-circ">
                <path
                  id="ellipse "
                  d="M342 199.5C342 113.62 272.38 44 186.5 44C100.62 44 31 113.62 31 199.5C31 285.38 100.62 355 186.5 355"
                  stroke="#1A1A1A"
                  stroke-width="2"
                />
                <g id="name2">
                  <path
                    id="H"
                    d="M201.131 52.0257L198.852 73.9235L194.313 73.7007L195.244 64.757L186.487 64.3271L185.556 73.2708L181.017 73.048L183.296 51.1502L187.835 51.373L186.891 60.444L195.648 60.874L196.592 51.8029L201.131 52.0257Z"
                    fill="#006429"
                  />
                  <path
                    id="E"
                    d="M171.157 51.463L173.57 73.3463L158.718 75.7168L158.312 72.0272L168.676 70.3729L168.09 65.0611L159.211 66.4783L158.804 62.7887L167.683 61.3715L167.077 55.8688L156.712 57.5231L156.305 53.8335L171.157 51.463Z"
                    fill="#006429"
                  />
                  <path
                    id="R"
                    d="M145.376 56.2119L152.295 77.1124L142.42 80.7629C141.08 81.2585 139.959 81.5023 139.058 81.4944C138.137 81.4939 137.369 81.2777 136.755 80.8457C136.147 80.434 135.635 79.8389 135.22 79.0603C134.792 78.3094 134.41 77.4276 134.075 76.415C133.84 75.7061 133.649 74.9245 133.501 74.07C133.353 73.2155 133.375 72.3663 133.567 71.5224C133.739 70.6859 134.212 69.9429 134.985 69.2934L128.958 62.2813L133.46 60.6169L139.358 67.8475L138.116 67.6586C138.236 67.5461 138.393 67.4427 138.586 67.3485C138.759 67.2616 138.966 67.1738 139.206 67.0851L143.648 65.4429L141.114 57.7875L145.376 56.2119ZM144.805 68.9364L140.903 70.3789C140.063 70.6896 139.419 70.9843 138.972 71.2631C138.526 71.5419 138.219 71.8371 138.053 72.1486C137.893 72.4804 137.847 72.8498 137.914 73.2568C137.988 73.684 138.129 74.2116 138.337 74.8394C138.545 75.4672 138.746 75.9725 138.94 76.3554C139.134 76.7383 139.378 77.0004 139.672 77.1418C139.966 77.2832 140.38 77.3121 140.913 77.2284C141.427 77.1521 142.104 76.9587 142.945 76.648L146.877 75.1944L144.805 68.9364Z"
                    fill="#006429"
                  />
                  <path
                    id="B"
                    d="M118.882 66.9499L130.216 85.8243L121.077 91.4877C119.862 92.2405 118.764 92.6701 117.782 92.7762C116.794 92.9119 115.904 92.7355 115.113 92.247C114.315 91.788 113.603 91.0372 112.977 89.9947C112.461 89.1351 112.139 88.3305 112.013 87.5809C111.886 86.8313 111.948 86.1275 112.2 85.4696C112.452 84.8116 112.9 84.17 113.545 83.5447L113.479 83.435C112.546 83.7873 111.719 83.9231 110.999 83.8424C110.272 83.7912 109.613 83.5222 109.022 83.0352C108.441 82.5665 107.877 81.8749 107.328 80.9605C106.877 80.2106 106.556 79.4686 106.364 78.7344C106.183 78.0185 106.169 77.3118 106.323 76.6145C106.458 75.9283 106.799 75.2528 107.345 74.5881C107.892 73.9233 108.682 73.2707 109.715 72.6302L118.882 66.9499ZM116.898 72.4708L112.872 74.9654C112.146 75.4149 111.614 75.8329 111.273 76.2193C110.944 76.6241 110.811 77.0452 110.875 77.4826C110.931 77.9495 111.152 78.503 111.536 79.1431C111.91 79.7649 112.282 80.199 112.654 80.4454C113.037 80.71 113.481 80.7863 113.986 80.6742C114.473 80.5733 115.079 80.2981 115.804 79.8486L119.83 77.354L116.898 72.4708ZM121.675 80.4266L117.785 82.8369C117.096 83.2639 116.596 83.6742 116.285 84.0677C115.956 84.4724 115.808 84.89 115.843 85.3203C115.87 85.7802 116.049 86.2845 116.378 86.8331C116.762 87.4732 117.135 87.9073 117.496 88.1354C117.85 88.393 118.265 88.4622 118.74 88.343C119.198 88.2351 119.808 87.9451 120.569 87.4732L124.459 85.0629L121.675 80.4266Z"
                    fill="#006429"
                  />
                  <path
                    id="A"
                    d="M96.5915 81.504L106.377 102.518L101.946 106.682L81.2936 95.8789L84.675 92.7015L89.2266 95.0987L95.4997 89.2041L93.2801 84.6156L96.5915 81.504ZM97.204 92.6521L92.6333 96.9471L101.308 101.617L101.448 101.486L97.204 92.6521Z"
                    fill="#006429"
                  />
                  <path
                    id="L"
                    d="M75.0636 103.554L93.2054 116.027L90.5242 119.696L75.5467 109.398L70.1086 116.839L66.9444 114.663L75.0636 103.554Z"
                    fill="#006429"
                  />
                  <path
                    id="I"
                    d="M61.7683 123.854L81.6132 133.388L79.4787 137.399L59.6338 127.866L61.7683 123.854Z"
                    fill="#006429"
                  />
                  <path
                    id="F"
                    d="M54.9731 138.093L76.0616 144.416L71.2405 157.985L67.6848 156.919L70.9846 147.631L65.2834 145.922L62.38 154.094L58.8244 153.027L61.7278 144.856L53.4518 142.375L54.9731 138.093Z"
                    fill="#006429"
                  />
                  <path
                    id="E_2"
                    d="M47.8592 162.001L69.7694 164.156L67.4806 179.021L63.7864 178.658L65.3837 168.284L60.0654 167.761L58.697 176.648L55.0028 176.285L56.3712 167.398L50.8618 166.856L49.2645 177.229L45.5704 176.866L47.8592 162.001Z"
                    fill="#006429"
                  />
                </g>
                <g id="name1">
                  <path
                    id="H_2"
                    d="M205.873 358.802L205.985 359.289L206.473 359.177L210.901 358.161L211.389 358.049L211.277 357.562L209.35 349.16L216.921 347.423L218.848 355.825L218.96 356.312L219.447 356.2L223.876 355.184L224.364 355.072L224.252 354.585L219.329 333.127L219.217 332.639L218.73 332.751L214.301 333.767L213.814 333.879L213.925 334.366L215.824 342.643L208.253 344.38L206.354 336.103L206.242 335.616L205.755 335.728L201.326 336.744L200.839 336.856L200.95 337.343L205.873 358.802Z"
                    fill="#006429"
                    stroke="#006429"
                  />
                  <path
                    id="E_3"
                    d="M234.078 351.417L234.264 351.881L234.728 351.695L248.687 346.094L249.151 345.908L248.964 345.444L247.582 341.999L247.396 341.535L246.932 341.721L237.655 345.444L235.966 341.234L243.847 338.072L244.311 337.885L244.125 337.421L242.742 333.976L242.556 333.512L242.092 333.698L234.211 336.861L232.593 332.829L241.87 329.107L242.334 328.921L242.148 328.457L240.766 325.012L240.58 324.548L240.116 324.734L226.157 330.335L225.693 330.521L225.879 330.985L234.078 351.417Z"
                    fill="#006429"
                    stroke="#006429"
                  />
                  <path
                    id="R_2"
                    d="M257.186 341.464L257.439 341.895L257.87 341.641L261.786 339.337L262.217 339.083L261.964 338.652L258.128 332.133L261.778 329.985C261.79 329.978 261.801 329.971 261.812 329.965L268.252 335.157L268.521 335.374L268.819 335.198L272.956 332.764L273.596 332.387L273.006 331.936L265.968 326.548C266.461 325.824 266.723 325.05 266.724 324.232C266.743 323.313 266.579 322.421 266.232 321.561C265.901 320.741 265.54 319.996 265.147 319.328C264.595 318.389 264.017 317.579 263.413 316.902C262.801 316.178 262.111 315.644 261.34 315.321C260.532 314.969 259.621 314.9 258.631 315.081C257.651 315.253 256.528 315.726 255.271 316.465L246.197 321.805L245.767 322.058L246.02 322.489L257.186 341.464ZM257.908 320.517L257.908 320.517L257.912 320.516C258.387 320.351 258.693 320.337 258.875 320.385C259.065 320.434 259.277 320.566 259.501 320.843C259.751 321.152 260.04 321.581 260.369 322.14C260.697 322.697 260.932 323.158 261.08 323.526C261.195 323.818 261.211 324.072 261.153 324.304C261.086 324.515 260.911 324.781 260.565 325.095C260.215 325.413 259.669 325.796 258.909 326.243L255.754 328.1L252.918 323.28L256.1 321.408C256.861 320.96 257.46 320.669 257.908 320.517Z"
                    fill="#006429"
                    stroke="#006429"
                  />
                  <path
                    id="B_2"
                    d="M280.215 327.059L280.533 327.445L280.919 327.128L289.25 320.281C290.216 319.487 290.954 318.696 291.443 317.905C291.926 317.124 292.204 316.334 292.248 315.541C292.307 314.755 292.179 313.985 291.868 313.237L291.867 313.234C291.55 312.488 291.097 311.761 290.516 311.054C289.817 310.204 289.114 309.555 288.403 309.135C287.665 308.689 286.872 308.488 286.037 308.542C285.617 308.554 285.184 308.633 284.739 308.771C284.91 308.423 285.038 308.072 285.119 307.719C285.299 306.942 285.254 306.148 284.995 305.35C284.738 304.554 284.266 303.752 283.602 302.944C282.794 301.962 281.915 301.26 280.958 300.878C279.991 300.461 278.965 300.408 277.903 300.702C276.845 300.967 275.747 301.586 274.612 302.52L266.305 309.347L265.919 309.664L266.236 310.051L280.215 327.059ZM286.605 315.412L286.605 315.412L286.608 315.423C286.686 315.682 286.655 315.966 286.448 316.309C286.203 316.675 285.775 317.12 285.137 317.645L281.865 320.334L278.883 316.707L282.155 314.017C282.797 313.49 283.309 313.178 283.7 313.04L283.7 313.04L283.706 313.038C284.08 312.9 284.389 312.919 284.671 313.059L284.671 313.059L284.68 313.063C284.99 313.209 285.367 313.521 285.806 314.056C286.259 314.607 286.509 315.057 286.605 315.412ZM280.333 309.286L280.333 309.286L280.329 309.292C280.117 309.65 279.727 310.079 279.121 310.577L275.972 313.165L273.173 309.76L276.322 307.172C277.003 306.612 277.52 306.285 277.884 306.145L277.884 306.145L277.89 306.143C278.23 306.007 278.498 306.026 278.742 306.154L278.756 306.162L278.771 306.168C279.058 306.296 279.431 306.601 279.888 307.156C280.262 307.612 280.462 308.011 280.533 308.355L280.533 308.355L280.535 308.365C280.595 308.63 280.551 308.929 280.333 309.286Z"
                    fill="#006429"
                    stroke="#006429"
                  />
                  <path
                    id="A_2"
                    d="M299.199 310.726L299.544 311.332L300.008 310.811L303.027 307.415L303.269 307.143L303.084 306.829L300.676 302.739L305.915 296.847L310.303 298.718L310.634 298.859L310.873 298.591L313.956 295.123L314.419 294.602L313.777 294.33L292.37 285.273L292.04 285.134L291.802 285.402L287.762 289.945L287.523 290.213L287.701 290.525L299.199 310.726ZM301.412 294.868L298.159 298.526L294.164 291.698L301.412 294.868Z"
                    fill="#006429"
                    stroke="#006429"
                  />
                  <path
                    id="L_2"
                    d="M318.137 288.429L318.555 288.704L318.83 288.286L326.397 276.794L326.672 276.376L326.254 276.101L323.047 273.989L322.629 273.714L322.354 274.132L317.561 281.412L302.798 271.691L302.38 271.416L302.105 271.834L299.607 275.629L299.332 276.047L299.749 276.322L318.137 288.429Z"
                    fill="#006429"
                    stroke="#006429"
                  />
                  <path
                    id="I_2"
                    d="M330.222 268.742L330.667 268.969L330.895 268.524L332.963 264.478L333.19 264.033L332.745 263.805L313.141 253.786L312.695 253.559L312.468 254.004L310.4 258.05L310.172 258.495L310.618 258.723L330.222 268.742Z"
                    fill="#006429"
                    stroke="#006429"
                  />
                  <path
                    id="F_2"
                    d="M336.857 255.155L337.325 255.331L337.501 254.863L339.101 250.61L339.277 250.142L338.809 249.966L331.19 247.1L334.067 239.451L334.243 238.983L333.775 238.807L330.3 237.501L329.832 237.325L329.656 237.793L326.779 245.442L322.144 243.698L325.438 234.941L325.614 234.473L325.146 234.297L321.672 232.99L321.204 232.814L321.028 233.282L315.958 246.761L315.782 247.229L316.25 247.405L336.857 255.155Z"
                    fill="#006429"
                    stroke="#006429"
                  />
                  <path
                    id="E_4"
                    d="M344.764 232.34L345.253 232.448L345.361 231.96L348.615 217.276L348.723 216.788L348.235 216.68L344.611 215.877L344.123 215.768L344.015 216.257L341.852 226.016L337.423 225.034L339.261 216.743L339.369 216.255L338.881 216.147L335.257 215.344L334.769 215.236L334.661 215.724L332.823 224.015L328.582 223.075L330.745 213.315L330.853 212.827L330.365 212.719L326.741 211.916L326.253 211.808L326.145 212.296L322.89 226.979L322.782 227.468L323.27 227.576L344.764 232.34Z"
                    fill="#006429"
                    stroke="#006429"
                  />
                </g>
                <g id="logo-herbalife">
                  <path
                    className="origin-center animate-leaf1"
                    id="leaft3"
                    d="M183.153 225.091C183.81 224.903 183.563 224.334 183.329 224.035C183.215 223.891 180.024 218.013 178.343 215.06C177.639 213.824 175.234 208.667 173.65 205.44C171.831 201.736 167.973 193.077 165.379 188.429C161.155 180.862 159.572 177.577 156.111 172.826C151.283 166.197 148.368 163.238 145.318 160.742C140.156 156.519 135.991 154.503 134.407 153.703C129.362 151.157 124.318 150.16 122.323 149.832C117.689 149.069 111.706 149.289 108.245 149.597C101.91 150.16 97.0412 151.521 95.3987 152.178C94.6948 152.46 95.0859 153.036 95.3401 153.351C97.0412 155.463 102.438 165.67 104.432 170.656L112.469 187.667C117.02 196.724 122.069 203.837 124.024 206.262C127.005 209.957 128.13 212.655 137.575 219.694C140.508 221.881 145.904 224.622 148.837 225.502C155.29 227.437 159.454 227.965 162.563 227.965C166.611 227.965 170.834 227.604 172.594 227.32C178.049 226.44 182.331 225.326 183.153 225.091Z"
                    fill="#006429"
                  />
                  <path
                    className="origin-center animate-leaf2"
                    id="leaf2"
                    d="M191.735 213.868C192.088 214.453 192.573 214.067 192.801 213.763C192.91 213.615 197.752 209.002 200.164 206.608C201.173 205.606 205.525 201.939 208.227 199.568C211.328 196.846 218.681 190.863 222.491 187.146C228.695 181.095 231.453 178.709 235.137 174.129C240.276 167.738 242.373 164.152 243.986 160.557C246.717 154.472 247.577 149.925 247.936 148.188C249.078 142.653 248.724 137.523 248.521 135.512C248.048 130.84 246.275 125.121 245.075 121.861C242.879 115.892 240.295 111.547 239.232 110.132C238.777 109.526 238.323 110.054 238.084 110.382C236.489 112.575 228.044 120.447 223.751 123.673L209.425 135.869C201.869 142.626 196.319 149.355 194.488 151.875C191.698 155.716 189.387 157.507 185.055 168.46C183.71 171.862 182.472 177.787 182.387 180.848C182.202 187.582 182.779 191.74 183.59 194.741C184.645 198.649 186.096 202.632 186.829 204.257C189.102 209.293 191.295 213.137 191.735 213.868Z"
                    fill="#006429"
                  />
                  <path
                    className="origin-center animate-leaf3"
                    id="leaf1"
                    d="M191.443 293.767C191.795 294.352 192.281 293.965 192.508 293.661C192.618 293.514 197.46 288.9 199.871 286.506C200.881 285.504 205.233 281.837 207.934 279.467C211.036 276.745 218.389 270.761 222.199 267.045C228.402 260.993 231.16 258.607 234.844 254.027C239.984 247.637 242.08 244.051 243.694 240.455C246.424 234.37 247.284 229.824 247.643 228.086C248.785 222.552 248.432 217.422 248.228 215.411C247.756 210.738 245.982 205.02 244.782 201.759C242.586 195.79 240.002 191.445 238.94 190.031C238.484 189.425 238.03 189.952 237.792 190.28C236.197 192.473 227.751 200.346 223.458 203.572L209.133 215.767C201.577 222.524 196.027 229.254 194.196 231.774C191.406 235.615 189.095 237.406 184.763 248.359C183.418 251.761 182.179 257.685 182.095 260.746C181.909 267.48 182.486 271.639 183.297 274.64C184.353 278.547 185.804 282.53 186.537 284.155C188.809 289.192 191.002 293.035 191.443 293.767Z"
                    fill="#006429"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          Benefícios Nutricionais
        </h2>
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-20 lg:flex-nowrap flex-wrap">
          <div className="flex justify-center items-center min-w-[250px]">
            <Image
              className="rounded-lg shadow-card"
              width={300}
              height={0}
              src={cr7.src}
              alt="cr7"
            />
          </div>
          <article className="flex flex-col gap-3 w-full self-start max-w-[700px]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            {params.user}
            <ul className="list-disc list-inside">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">Quero emagrecer</h2>
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-20 lg:flex-nowrap flex-wrap-reverse">
          <article className="flex flex-col gap-3 w-full self-start">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            {params.user}
            <ul className="list-disc list-inside">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </article>
          <div className="flex justify-center items-center min-w-[250px]">
            <Image
              className="rounded-lg shadow-card"
              width={300}
              height={0}
              src={woman.src}
              alt="cr7"
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          itaque soluta tempora. Harum expedita laudantium consequatur cumque
          placeat porro explicabo, commodi reiciendis deleniti ipsum eligendi
          corporis numquam vel quas totam.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          Sobre os Produtos
        </h2>
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-20 lg:flex-nowrap flex-wrap-reverse">
          <article className="flex flex-col gap-3 w-full self-start">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            {params.user}
          </article>
          <div className="flex justify-center items-center min-w-[300px]">
            <Image
              className="scale-100 lg:scale-150"
              width={350}
              height={0}
              src={products.src}
              alt="cr7"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-primary text-3xl">
          Como faço para trabalhar na herbalife?
        </h2>
        <div className="flex items-center justify-center">
          <article className="flex flex-col gap-3 w-full self-start">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              itaque soluta tempora. Harum expedita laudantium consequatur
              cumque placeat porro explicabo, commodi reiciendis deleniti ipsum
              eligendi corporis numquam vel quas totam.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
