interface LoaderProps {
  withLogo?: boolean;
  loaderSize?: "large" | "small";
  logoSize?: string;
}

export default function Loader({
  withLogo = true,
  loaderSize = "large",
  logoSize = loaderSize === "large" ? "w-14 h-14" : "w-5 h-5 ",
}: LoaderProps) {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center relative">
      <div
        className={` ${
          loaderSize === "large"
            ? "w-28 h-28 border-[6px]"
            : "w-10 h-10 border-[3px]"
        }  text-primary text-4xl animate-spin border-white-secondary flex items-center justify-center border-t-primary rounded-full`}
      ></div>

      {withLogo && (
        <svg
          className={`absolute ${logoSize} w-14 h-14 overflow-visible`}
          width="1450"
          height="1585"
          viewBox="0 0 1450 1585"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logo-herbalife">
            <path
              className="origin-center animate-leaf4"
              id="leaft3"
              d="M751.399 989.542C756.999 987.942 754.899 983.087 752.899 980.542C751.932 979.312 724.732 929.208 710.399 904.042C704.399 893.507 683.899 849.542 670.399 822.042C654.899 790.468 622.01 716.657 599.899 677.042C563.899 612.542 550.399 584.542 520.899 544.042C479.744 487.542 454.899 462.314 428.899 441.042C384.899 405.042 349.399 387.856 335.899 381.042C292.899 359.337 249.899 350.839 232.899 348.042C193.399 341.542 142.399 343.42 112.899 346.042C58.8989 350.842 17.3989 362.442 3.39884 368.042C-2.60116 370.442 0.731868 375.352 2.89884 378.042C17.3991 396.042 63.399 483.042 80.3989 525.542L148.899 670.542C187.699 747.742 230.732 808.375 247.399 829.042C272.802 860.542 282.399 883.542 362.899 943.542C387.899 962.176 433.899 985.542 458.899 993.042C513.899 1009.54 549.399 1014.04 575.899 1014.04C610.399 1014.04 646.399 1010.96 661.399 1008.54C707.899 1001.04 744.399 991.542 751.399 989.542Z"
              fill="#006429"
            />
            <path
              className="origin-center animate-leaf5"
              id="leaf2"
              d="M824.557 893.88C827.562 898.868 831.701 895.575 833.637 892.98C834.572 891.726 875.845 852.397 896.401 831.995C905.006 823.455 942.101 792.196 965.127 771.989C991.565 748.79 1054.24 697.785 1086.72 666.105C1139.59 614.526 1163.1 594.189 1194.5 555.146C1238.31 500.677 1256.18 470.111 1269.94 439.462C1293.21 387.594 1300.54 348.841 1303.6 334.03C1313.34 286.857 1310.32 243.129 1308.59 225.988C1304.56 186.16 1289.44 137.416 1279.21 109.621C1260.49 58.7433 1238.47 21.7062 1229.41 9.65171C1225.53 4.48553 1221.66 8.984 1219.63 11.7777C1206.03 30.4714 1134.05 97.5738 1097.45 125.072L975.341 229.025C910.936 286.62 863.628 343.981 848.024 365.462C824.242 398.203 804.542 413.467 767.618 506.831C756.152 535.827 745.594 586.33 744.875 612.42C743.294 669.82 748.211 705.265 755.124 730.847C764.123 764.153 776.489 798.103 782.737 811.952C802.107 854.886 820.8 887.644 824.557 893.88Z"
              fill="#006429"
            />
            <path
              className="origin-center animate-leaf6"
              id="leaf1"
              d="M822.064 1574.92C825.069 1579.91 829.208 1576.62 831.143 1574.02C832.078 1572.77 873.352 1533.44 893.908 1513.04C902.513 1504.5 939.608 1473.24 962.634 1453.03C989.072 1429.83 1051.75 1378.83 1084.22 1347.15C1137.1 1295.57 1160.61 1275.23 1192.01 1236.19C1235.82 1181.72 1253.69 1151.15 1267.44 1120.5C1290.72 1068.64 1298.05 1029.88 1301.11 1015.07C1310.84 967.899 1307.83 924.171 1306.09 907.03C1302.07 867.202 1286.95 818.458 1276.72 790.663C1258 739.785 1235.98 702.748 1226.92 690.693C1223.04 685.527 1219.17 690.026 1217.13 692.819C1203.54 711.513 1131.55 778.616 1094.96 806.113L972.848 910.067C908.443 967.662 861.134 1025.02 845.531 1046.5C821.749 1079.24 802.048 1094.51 765.125 1187.87C753.658 1216.87 743.101 1267.37 742.382 1293.46C740.801 1350.86 745.718 1386.31 752.63 1411.89C761.63 1445.19 773.995 1479.14 780.244 1492.99C799.614 1535.93 818.307 1568.69 822.064 1574.92Z"
              fill="#006429"
            />
          </g>
        </svg>
      )}
    </div>
  );
}

export function LoaderWithFullScreen() {
  return (
    <div className="fixed bg-white flex justify-center items-center top-0 left-0 w-full h-screen z-50">
      <Loader />
    </div>
  );
}
