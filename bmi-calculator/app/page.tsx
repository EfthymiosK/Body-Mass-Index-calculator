"use client";

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("metric");
  const [inches, setInches] = useState("");
  const [feet, setFeet] = useState("");
  const [stones, setStones] = useState("");
  const [lbs, setLbs] = useState("");
  const [kgs, setKgs] = useState("");
  const [cm, setCm] = useState("");
  const [bmiiMetric, setBmiiMetric] = useState(0);
  const [bmiiImperial, setBmiiImperial] = useState(0);

  useEffect(() => {
    const calculateBMI = () => {
      let calculatedBMI;
      if (selectedValue === "metric") {
        const weight = parseFloat(kgs);
        const height = parseFloat(cm);
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
          return;
        }
        const heightInMeters = height / 100;
        calculatedBMI = weight / (heightInMeters * heightInMeters);
        setBmiiMetric(calculatedBMI.toFixed(1));
      } else {
        console.log("Using imperial system");

        const feetToInches = parseFloat(feet) * 12 || 0;
        const inchesValue = parseFloat(inches) || 0;
        const heightInInches = feetToInches + inchesValue;

        const stonesToLbs = parseFloat(stones) * 14 || 0;
        const weightInLbs = stonesToLbs + (parseFloat(lbs) || 0);

        if (
          isNaN(heightInInches) ||
          isNaN(weightInLbs) ||
          heightInInches <= 0 ||
          weightInLbs <= 0
        ) {
          console.log("Invalid input, stopping calculation.");
          return;
        }

        calculatedBMI = (703 * weightInLbs) / (heightInInches * heightInInches);
        console.log("Calculated BMI (Imperial):", calculatedBMI);
        setBmiiImperial(calculatedBMI.toFixed(1));
      }
    };

    if ((kgs && cm) || (inches && feet && stones && lbs)) {
      calculateBMI();
    }
  }, [kgs, cm, inches, feet, stones, lbs, selectedValue]);

  const calculateIdealWeight = () => {
    if (selectedValue === "metric" && !isNaN(parseFloat(cm))) {
      return {
        min: (18.5 * (parseFloat(cm) / 100) ** 2).toFixed(1),
        max: (24.9 * (parseFloat(cm) / 100) ** 2).toFixed(1),
      };
    } else if (!isNaN(parseFloat(inches)) && !isNaN(parseFloat(feet))) {
      const heightInInches = parseFloat(inches) + parseFloat(feet) * 12;
      return {
        min: ((18.5 * heightInInches ** 2) / 703).toFixed(1),
        max: ((24.9 * heightInInches ** 2) / 703).toFixed(1),
      };
    }
    return { min: "0", max: "0" };
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const idealWeights = calculateIdealWeight();

  const calculateBmiCategory = () => {
    if (selectedValue === "metric") {
      if (bmiiMetric >= 40) {
        return "obese";
      }
      if (bmiiMetric >= 25) {
        return "overweight";
      }
      if (bmiiMetric >= 18.5) {
        return "a normal weight";
      } else {
        return "underweight";
      }
    } else {
      if (bmiiImperial >= 40) {
        return "obese";
      }
      if (bmiiImperial >= 25) {
        return "overweight";
      }
      if (bmiiImperial >= 18.5) {
        return "a normal weight";
      } else {
        return "underweight";
      }
    }
  };
  const calculatedBmiCategory = calculateBmiCategory();
  useEffect(() => {
    console.log("BMI Metric State (useEffect):", bmiiMetric);
  }, [bmiiMetric]);

  useEffect(() => {
    console.log("BMI Imperial State (useEffect):", bmiiImperial);
  }, [bmiiImperial]);

  return (
    <div className="font-[family-name:var(--font-inter)]">
      <header className=" bg-white h-[75rem] md:h-[60rem] xl:h-[46rem]">
        <div className="h-[649px] px-6 pt-8 xl:pl-[8.75rem] xl:pt-[5.5rem] xl:pr-[33%] xl:w-[70%]  backy flex flex-col items-center xl:items-start rounded-b-[40px] relative">
          <Image
            src="/logo.svg"
            width={37}
            height={37}
            className="mx-auto xl:mx-0"
            alt="logo of company"
          />
          <h1 className="text-[3rem] text-blue900 font-semibold mt-8 xl:mt-[6rem] text-center xl:text-left leading-[110%] tracking-tight">
            Body Mass Index Calculator
          </h1>
          <p className="text-gray-500 text-center xl:text-left mt-6">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
          <div
            className={
              selectedValue === "metric"
                ? "form-container w-[87%] md:w-[90%] xl:w-[56%] h-fit rounded-xl bg-white shadow-lg absolute -bottom-[500px] md:-bottom-[200px] xl:top-[146px] xl:left-[736px] p-6"
                : "form-container w-[87%] md:w-[90%] xl:w-[56%] h-fit rounded-xl bg-white shadow-lg absolute -bottom-[500px] md:-bottom-[200px] xl:top-[146px] xl:left-[736px] p-6"
            }
          >
            <h3 className="text-2xl text-blue900 font-semibold">
              Enter your details below
            </h3>
            <form className="" action="">
              <div className="radio-inputs flex justify-between  md:gap-6 mt-6">
                <div className="w-1/2 flex items-center">
                  <input
                    className="appearance-none border-2 border-grey500 w-8 h-8 rounded-full checked:border-0 checked:bg-blue100 relative peer"
                    type="radio"
                    name="unit"
                    id="metric"
                    value="metric"
                    checked={selectedValue === "metric"}
                    onChange={() => handleRadioChange("metric")}
                  />
                  <div className="absolute w-4 h-4 rounded-full peer-checked:bg-blue-500 ml-2 pointer-events-none" />
                  <label
                    className="ml-4 text-blue900 font-semibold"
                    htmlFor="metric"
                  >
                    Metric
                  </label>
                </div>
                <div className="w-1/2 flex items-center">
                  <input
                    className="appearance-none border-2 border-grey500 w-8 h-8 rounded-full checked:border-0 checked:bg-blue100 relative peer"
                    type="radio"
                    name="unit"
                    id="imperial"
                    value="imperial"
                    checked={selectedValue === "imperial"}
                    onChange={() => handleRadioChange("imperial")}
                  />
                  <div className="absolute w-4 h-4 rounded-full peer-checked:bg-blue-500 ml-2 pointer-events-none" />
                  <label
                    className="ml-4 text-blue900 font-semibold"
                    htmlFor="imperial"
                  >
                    Imperial
                  </label>
                </div>
              </div>
              {selectedValue === "metric" ? (
                <div className="forms-metric flex flex-col md:flex-row gap-4 md:gap-6 mt-6 w-full">
                  <div className="height-metric flex flex-col text-grey500 text-[0.875rem] relative md:w-1/2  ">
                    <label htmlFor="height">Height</label>
                    <input
                      className="h-[77px] border border-grey500 rounded-xl text-grey500 text-2xl font-semibold pl-6 mt-2 w-full"
                      type="number"
                      name="heightCm"
                      id="height"
                      placeholder="0"
                      value={cm}
                      onChange={handleInputChange(setCm)}
                    />
                    <span className="text-2xl text-blue500 font-semibold absolute bottom-[24px] right-[24px]">
                      cm
                    </span>
                  </div>
                  <div className="weight-metric  flex flex-col text-grey500 text-[0.875rem] relative  md:w-1/2 ">
                    <label htmlFor="weight">Weight</label>
                    <input
                      className="h-[77px] border border-grey500 rounded-xl text-grey500 text-2xl font-semibold pl-6 mt-2 w-full"
                      type="number"
                      name="weightKgs"
                      id="weight"
                      placeholder="0"
                      value={kgs}
                      onChange={handleInputChange(setKgs)}
                    />
                    <span className="text-2xl text-blue500 font-semibold absolute bottom-[24px] right-[24px]">
                      kg
                    </span>
                  </div>
                </div>
              ) : (
                <div className="forms-imperial flex flex-col  gap-4 md:gap-6 mt-6 w-full">
                  <div className="height-imperial flex flex-col text-grey500 text-[0.875rem] relative md:w-full  ">
                    <label htmlFor="height">Height</label>
                    <div className="inputs-container flex gap-4 relative">
                      <div className="ft-container relative w-1/2">
                        <input
                          className="h-[77px] border border-grey500 rounded-xl text-grey500 text-2xl font-semibold pl-6 mt-2 w-full relative"
                          type="number"
                          name="heightFt"
                          id="height"
                          placeholder="0"
                          value={feet}
                          onChange={handleInputChange(setFeet)}
                        />
                        <span className="text-2xl text-blue500 font-semibold absolute bottom-[24px] right-6">
                          ft
                        </span>
                      </div>
                      <input
                        className="h-[77px] border border-grey500 rounded-xl text-grey500 text-2xl font-semibold pl-6 mt-2 w-1/2"
                        type="number"
                        name="heightInches"
                        id="height"
                        placeholder="0"
                        value={inches}
                        onChange={handleInputChange(setInches)}
                      />
                    </div>
                    <span className="text-2xl text-blue500 font-semibold absolute bottom-[24px] right-[24px]">
                      in
                    </span>
                  </div>
                  <div className="weight-imperial flex flex-col text-grey500 text-[0.875rem] relative md:w-full  ">
                    <label htmlFor="weight">Weight</label>
                    <div className="inputs-container flex gap-4 relative">
                      <div className="ft-container relative w-1/2">
                        <input
                          className="h-[77px] border border-grey500 rounded-xl text-grey500 text-2xl font-semibold pl-6 mt-2 w-full relative"
                          type="number"
                          name="weightSt"
                          id="weight"
                          placeholder="0"
                          value={stones}
                          onChange={handleInputChange(setStones)}
                        />
                        <span className="text-2xl text-blue500 font-semibold absolute bottom-[24px] right-6">
                          st
                        </span>
                      </div>
                      <input
                        className="h-[77px] border border-grey500 rounded-xl text-grey500 text-2xl font-semibold pl-6 mt-2 w-1/2"
                        type="number"
                        name="weightLbs"
                        id="weight"
                        placeholder="0"
                        value={lbs}
                        onChange={handleInputChange(setLbs)}
                      />
                    </div>
                    <span className="text-2xl text-blue500 font-semibold absolute bottom-[24px] right-[24px]">
                      lbs
                    </span>
                  </div>
                </div>
              )}
              <div className="results bg-blue500 text-white p-8 mt-6 rounded-2xl flex flex-col md:flex-row md:justify-between md:rounded-l-xl md:rounded-r-full">
                <div className="bmi md:flex md:flex-col md:justify-between">
                  <p className="font-semibold">Your BMI is...</p>
                  <span className="bmi text-5xl font-semibold mt-2 ">
                    {selectedValue === "metric"
                      ? bmiiMetric || "0"
                      : bmiiImperial || "0"}
                  </span>
                </div>
                <div className="results-p">
                  <p className="text-[0.875rem] mt-6 md:mt-1">
                    Your BMI suggests you&apos;re
                  </p>
                  <span className="classification text-[0.875rem]">
                    {calculatedBmiCategory}
                  </span>
                  <p className="text-[0.875rem]">
                    Your ideal weight is between
                  </p>
                  <span className="range text-[0.875rem] font-bold">
                    {idealWeights.min}
                    {selectedValue === "metric" ? " kgs " : " lbs "} and
                    {" " + idealWeights.max}
                    {selectedValue === "metric" ? " kgs" : " lbs"}.
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      <main className="xl:relative">
        <div className="curve-container hidden xl:block xl:absolute xl:right-[5%]">
          <Image
            src="/pattern-curved-line-left.svg"
            width={85.831}
            height={200.501}
            className=""
            alt="image of a left curve"
          />
        </div>
        <div className="explanation-container flex flex-col md:flex-row md:mb-24 xl:px-[144px] xl:justify-between xl:gap-[131px]">
          <div className="image-container xl:w-[650px] ">
            <Image
              src="/image-man-eating.webp"
              width={1128}
              height={1066}
              className="mx-auto md:mt-20 md:-ml-10 xl:ml-0 xl:mt-0 "
              alt="logo of company"
              layout="responsive"
            />
          </div>
          <div className="explanation p-6 xl:p-0 mb-[38px] md:mb-0 md:w-[361px] xl:w-[465px] xl:pt-[12%]">
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
        <div className="advice flex flex-col xl:flex-row gap-10 px-6 py-14 backy2">
          <div className="advice-item flex flex-col md:flex-row xl:flex-col md:items-center xl:items-start gap-8">
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
          <div className="advice-item flex flex-col md:flex-row xl:flex-col md:items-center xl:items-start gap-8">
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
          <div className="advice-item flex flex-col md:flex-row xl:flex-col md:items-center xl:items-start gap-8">
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
        <div className="limitations pl-[19px] pr-[29px] xl:mx-auto xl:w-[1260px] xl:px-[40px]  mt-[82px] md:flex xl:flex md:flex-wrap md:justify-center xl:justify-center md:gap-x-4 xl:gap-x-8">
          <div className="first-container mb-14 md:w-full xl:w-[564px] flex-[0_1_564px]">
            <h3 className="text-[2rem] text-blue900 font-semibold leading-[110%] text-center mb-4">
              Limitations of BMI
            </h3>
            <p className="text-grey500 leading-[150%] text-center">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className="item p-6 mb-4 md:mb-6 shadow-xl rounded-2xl md:w-1/2 xl:w-[365px] md:flex-[1_1_40%] xl:flex-[0_0_365px]">
            <div className="title-container flex gap-4 mb-4">
              <Image
                src="/icon-gender.svg"
                className=""
                width="32"
                height="32"
                alt="icon of gender"
              />
              <h3 className="text-xl text-blue900 tracking-tighter font-semibold">
                Gender
              </h3>
            </div>
            <div className="description">
              <p className="text-grey500 leading-[150%]">
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child&apos;s age and gender are
                considered when evaluating their BMI.
              </p>
            </div>
          </div>
          <div className="item hidden xl:relative xl:block xl:w-[365px] xl:flex-[0_0_365px]">
            <Image
              src="/pattern-curved-line-right.svg"
              width={94.664}
              height={122.518}
              className="absolute left-[164px] -top-6"
              alt="image of a right curve"
            />
          </div>
          <div className="item p-6 mb-4 md:mb-6 shadow-xl rounded-2xl md:w-1/2 xl:w-[365px] md:flex-[1_1_40%] xl:flex-[0_0_365px] ">
            <div className="title-container flex gap-4 mb-4">
              <Image
                src="/icon-age.svg"
                className=""
                width="32"
                height="32"
                alt="icon of age"
              />
              <h3 className="text-xl text-blue900 tracking-tighter font-semibold">
                Age
              </h3>
            </div>
            <div className="description">
              <p className="text-grey500 leading-[150%]">
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>
          </div>
          <div className="item p-6 mb-4 md:mb-6 shadow-xl rounded-2xl md:w-1/2 xl:w-[365px] md:flex-[1_1_40%] xl:flex-[0_0_365px] ">
            <div className="title-container flex gap-4 mb-4">
              <Image
                src="/icon-muscle.svg"
                className=""
                width="32"
                height="32"
                alt="icon of muscle"
              />
              <h3 className="text-xl text-blue900 tracking-tighter font-semibold">
                Muscle
              </h3>
            </div>
            <div className="description">
              <p className="text-grey500 leading-[150%]">
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn&apos;t differentiate muscle from fat.
              </p>
            </div>
          </div>
          <div className="item p-6 mb-4 md:mb-6 shadow-xl rounded-2xl md:w-1/2 xl:w-[365px] md:flex-[1_1_40%] xl:flex-[0_0_365px]  ">
            <div className="title-container flex gap-4 mb-4">
              <Image
                src="/icon-pregnancy.svg"
                className=""
                width="32"
                height="32"
                alt="icon of pregnancy"
              />
              <h3 className="text-xl text-blue900 tracking-tighter font-semibold">
                Pregnancy
              </h3>
            </div>
            <div className="description">
              <p className="text-grey500 leading-[150%]">
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </p>
            </div>
          </div>
          <div className="item p-6 mb-4 md:mb-6 shadow-xl rounded-2xl md:w-1/2 xl:w-[365px] xl:flex-[0_0_365px] ">
            <div className="title-container flex gap-4 mb-4">
              <Image
                src="/icon-race.svg"
                className=""
                width="32"
                height="32"
                alt="icon of race"
              />
              <h3 className="text-xl text-blue900 tracking-tighter font-semibold">
                Race
              </h3>
            </div>
            <div className="description">
              <p className="text-grey500 leading-[150%]">
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
