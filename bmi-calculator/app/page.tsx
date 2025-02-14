import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter)]">
      <header className=" bg-white h-[75rem]">
        <div className="h-[649px] w-full px-6 pt-8   backy flex flex-col items-center rounded-b-[40px] relative">
          <Image
            src="/logo.svg"
            width={37}
            height={37}
            className="mx-auto"
            alt="logo of company"
          />
          <h1 className="text-[3rem] text-blue900 font-semibold mt-8 text-center leading-[110%] tracking-tight">
            Body Mass Index Calculator
          </h1>
          <p className="text-gray-500 text-center mt-6">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
          <div className="form-container w-[87%] h-fit rounded-xl bg-white shadow-lg absolute -bottom-[500px] p-6">
            <h3 className="text-2xl text-blue900 font-semibold">
              Enter your details below
            </h3>
            <form action="">
              <div className="radio-inputs">
                <input type="radio" name="unit" id="metric" />
                <label
                  className="ml-4 text-blue900 font-semibold"
                  htmlFor="metric"
                >
                  Metric
                </label>
                <input
                  className="ml-[55px]"
                  type="radio"
                  name="unit"
                  id="imperial"
                />
                <label
                  className="ml-4 text-blue900 font-semibold"
                  htmlFor="imperial"
                >
                  Imperial
                </label>
              </div>
              <div className="forms flex flex-col gap-4 mt-6">
                <div className="height flex flex-col text-grey500 text-[0.875rem] relative">
                  <label htmlFor="height">Height</label>
                  <input
                    className="h-[77px] border border-grey500 rounded-xl text-blue900 text-2xl font-semibold pl-6 mt-2"
                    type="text"
                    name=""
                    id="height"
                  />
                  <span className="text-2xl text-blue500 font-semibold absolute bottom-[24px] right-[24px]">
                    cm
                  </span>
                </div>
                <div className="weight  flex flex-col text-grey500 text-[0.875rem] relative">
                  <label htmlFor="weight">Weight</label>
                  <input
                    className="h-[77px] border border-grey500 rounded-xl text-blue900 text-2xl font-semibold pl-6 mt-2"
                    type="text"
                    name=""
                    id="weight"
                  />
                  <span className="text-2xl text-blue500 font-semibold absolute bottom-[24px] right-[24px]">
                    kg
                  </span>
                </div>
              </div>
              <div className="results bg-blue500 text-white p-8 mt-6 rounded-2xl">
                <p className="font-semibold">Your BMI is...</p>
                <span className="bmi text-5xl font-semibold mt-2 ">23.4</span>
                <p className="text-[0.875rem] mt-6">
                  Your BMI suggests you&apos;re
                </p>
                <span className="classification text-[0.875rem]">
                  a healthy weight
                </span>
                <p className="text-[0.875rem]">Your ideal weight is between </p>
                <span className="range text-[0.875rem] font-bold">
                  63.3kgs - 74.5kgs.
                </span>
              </div>
            </form>
          </div>
        </div>
      </header>
      <main>
        <div className="explanation-container flex flex-col">
          <div className="image-container">
            <Image
              src="/image-man-eating.webp"
              width={1128}
              height={1066}
              className="mx-auto"
              alt="logo of company"
              layout="responsive"
            />
          </div>
          <div className="explanation p-6 mb-[38px]">
            <h2 className="text-[2rem] text-blue900 font-semibold leading-[110%] mt-12 mb-8">
              What your BMI result means
            </h2>
            <p className="text-grey500 leading-[150%]">
              A BMI range of 18.5 to 24.9 is considered a &apos;healthy
              weight.&apos; Maintaining a healthy weight may lower your chances
              of experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </div>
        <div className="advice flex flex-col gap-10 px-6 py-14 backy2">
          <div className="advice-item flex flex-col gap-8">
            <div className="image-container">
              <Image
                src="/icon-eating.svg"
                className=""
                width="64"
                height="64"
                alt="icon of food"
              />
            </div>
            <div className="text-container">
              <h3 className="text-2xl text-blue900 font-semibold leading-[120%] mb-6">
                Healthy eating
              </h3>
              <p className="text-grey500 leading-[150%]">
                Healthy eating promotes weight control, disease prevention,
                better digestion, immunity, mental clarity, and mood.
              </p>
            </div>
          </div>
          <div className="advice-item flex flex-col gap-8">
            <div className="image-container">
              <Image
                src="/icon-exercise.svg"
                className=""
                width="64"
                height="64"
                alt="icon of food"
              />
            </div>
            <div className="text-container">
              <h3 className="text-2xl text-blue900 font-semibold leading-[120%] mb-6">
                Regular exercise
              </h3>
              <p className="text-grey500 leading-[150%]">
                Exercise improves fitness, aids weight control, elevates mood,
                and reduces disease risk, fostering wellness and longevity.
              </p>
            </div>
          </div>
          <div className="advice-item flex flex-col gap-8">
            <div className="image-container">
              <Image
                src="/icon-sleep.svg"
                className=""
                width="64"
                height="64"
                alt="icon of food"
              />
            </div>
            <div className="text-container">
              <h3 className="text-2xl text-blue900 font-semibold leading-[120%] mb-6">
                Adequate sleep
              </h3>
              <p className="text-grey500 leading-[150%]">
                Sleep enhances mental clarity, emotional stability, and physical
                wellness, promoting overall restoration and rejuvenation.
              </p>
            </div>
          </div>
        </div>
        <div className="limitations pl-[19px] pr-[29px] mt-[82px]">
          <div className="first-container mb-14">
            <h3 className="text-[2rem] text-blue900 font-semibold leading-[110%] text-center">
              Limitations of BMI
            </h3>
            <p className="text-grey500 leading-[150%] text-center">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className="item">
            <div className="title-container">
              <Image
                src="/icon-gender.svg"
                className=""
                width="32"
                height="32"
                alt="icon of gender"
              />
              <h3>Gender</h3>
            </div>
            <div className="description">
              <p>
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child&apos;s age and gender are
                considered when evaluating their BMI.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="title-container">
              <Image
                src="/icon-age.svg"
                className=""
                width="32"
                height="32"
                alt="icon of age"
              />
              <h3>Age</h3>
            </div>
            <div className="description">
              <p>
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="title-container">
              <Image
                src="/icon-muscle.svg"
                className=""
                width="32"
                height="32"
                alt="icon of muscle"
              />
              <h3>Muscle</h3>
            </div>
            <div className="description">
              <p>
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn&apos;t differentiate muscle from fat.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="title-container">
              <Image
                src="/icon-pregnancy.svg"
                className=""
                width="32"
                height="32"
                alt="icon of pregnancy"
              />
              <h3>Pregnancy</h3>
            </div>
            <div className="description">
              <p>
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="title-container">
              <Image
                src="/icon-race.svg"
                className=""
                width="32"
                height="32"
                alt="icon of race"
              />
              <h3>Race</h3>
            </div>
            <div className="description">
              <p>
                Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
