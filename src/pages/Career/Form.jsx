
// //  PROPERLY WORKING FORM WITH RESUME LINK


// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { toast } from "react-toastify";
// import "./Career.css";

// const Form = ({
//   setPopupVisible,
//   setSelectedJob,
//   selectedJob,
//   selectedJobTitle,
// }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     portfolio: "",
//     experience: "",
//     resume: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const scriptURL =
//     "https://script.google.com/macros/s/AKfycbwjmPokSAEr5Ko5nE1bwaLQr2_k-pUgZHkISUVsD_rNxzsWcz7VATQzrs5KnqZdHtjucQ/exec";

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const isValidPhoneNumber = (phone) => {
//     return phone && phone.length >= 10;
//   };

//   const isValidExperience = (experience) => {
//     return experience > 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isValidEmail(formData.email)) {
//       toast.error("Please enter a valid email address.");
//       return;
//     }

//     if (!isValidPhoneNumber(formData.phone)) {
//       toast.error("Please enter a valid phone number.");
//       return;
//     }

//     if (!isValidExperience(formData.experience)) {
//       toast.error("Experience must be a positive number.");
//       return;
//     }

//     setLoading(true);

//     const countryCode = formData.phone.startsWith("+")
//     ? formData.phone.split(" ")[0]
//     : "";
//   const phoneNumber = formData.phone.replace(countryCode, "").trim();

//     const form = new FormData();
//     form.append("firstName", formData.firstName);
//     form.append("lastName", formData.lastName);
//     form.append("email", formData.email);
//     form.append("phone", phoneNumber);
//     form.append("portfolio", formData.portfolio);
//     form.append("experience", formData.experience);
//     form.append("resume", formData.resume);

//     form.append("designation", selectedJobTitle);
//     try {
//       const response = await fetch(scriptURL, {
//         method: "POST",
//         body: form,
//       });

//       if (response.ok) {
//         toast.success("Your application has been submitted successfully!");

//         setTimeout(() => {
//           setPopupVisible(false);
//           setSelectedJob(false);
//         }, 2000);

//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           portfolio: "",
//           experience: "",
//           resume: "",
//         });

//         const appliedJobIds =
//           JSON.parse(localStorage.getItem("appliedJobIds")) || [];
//         if (!appliedJobIds.includes(selectedJob)) {
//           appliedJobIds.push(selectedJob);
//           localStorage.setItem("appliedJobIds", JSON.stringify(appliedJobIds));
//         }
//       } else {
//         toast.error("Failed to submit the form. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error!", error.message);
//       toast.error(
//         "Error submitting form. Please check the console for details."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="mt-4 p-6 rounded shadow-lg w-full max-w-md relative">
//         {loading && (
//           <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500">
//             <div className="loader"></div>
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="text-white">
//           <h2 className="mb-[20px]">Applied for : {selectedJobTitle}</h2>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="firstName" className="block font-medium mb-1">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 required
//                 className="w-full p-2 border-white border rounded bg-transparent"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="lastName" className="block font-medium mb-1">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 required
//                 className="w-full p-2 border-white border rounded bg-transparent"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block font-medium mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full p-2 border-white border rounded bg-transparent"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="phone" className="block font-medium mb-1">
//                 Phone Number
//               </label>
//               <PhoneInput
//                 country={"us"}
//                 value={formData.phone}
//                 onChange={(phone) => setFormData({ ...formData, phone })}
//                 inputClass="w-full p-2 border border-white rounded bg-transparent text-white !bg-transparent"
//                 inputProps={{
//                   name: "phone",
//                   required: true,
//                 }}
//                 containerClass="w-full border border-white rounded bg-transparent"
//                 dropdownClass="bg-white text-black border border-gray-300 rounded shadow-md"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="portfolio" className="block font-medium mb-1">
//               Portfolio Link
//             </label>
//             <input
//               type="url"
//               id="portfolio"
//               name="portfolio"
//               className="w-full p-2 border-white border rounded bg-transparent"
//               value={formData.portfolio}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="experience" className="block font-medium mb-1">
//               Experience (in months)
//             </label>
//             <input
//               type="number"
//               id="experience"
//               name="experience"
//               className="w-full p-2 border-white border rounded bg-transparent"
//               value={formData.experience}
//               onChange={handleChange}
//               min="1"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="resume" className="block font-medium mb-1">
//               Resume
//             </label>
//             <input
//               type="file"
//               id="resume"
//               name="resume"
//               className="w-full p-2 border-white border rounded bg-transparent"
//               value={formData.resume}
//               onChange={handleChange}
//             />
//           </div>

//           <button
//             type="submit"
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;

























/* eslint-disable react/prop-types */
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import axios from "axios";
import "./Career.css";

const Form = ({
  setPopupVisible,
  setSelectedJob,
  selectedJob,
  selectedJobTitle,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "",
    resumeUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwjmPokSAEr5Ko5nE1bwaLQr2_k-pUgZHkISUVsD_rNxzsWcz7VATQzrs5KnqZdHtjucQ/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (!file || file.type !== "application/pdf") {
      toast.error("Please upload a valid PDF file.");
      return;
    }

    setUploading(true);

    const fileData = new FormData();
    fileData.append("file", file);
    fileData.append("upload_preset", "new_upload"); // Replace with your preset
    fileData.append("cloud_name", "dyh3kihmm"); // Replace with your cloud name
    fileData.append("resource_type", "raw"); // Ensure the file is treated as raw data

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dyh3kihmm/auto/upload`,
        fileData
      );

      setFormData({ ...formData, resumeUrl: response.data.secure_url });
      toast.success("PDF uploaded successfully!");
    } catch (error) {
      console.error("Error uploading PDF:", error);
      toast.error("Failed to upload PDF. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your validation logic
    if (!formData.resumeUrl) {
      toast.error("Please upload your resume.");
      return;
    }

    setLoading(true);

    const countryCode = formData.phone.startsWith("+")
      ? formData.phone.split(" ")[0]
      : "";
    const phoneNumber = formData.phone.replace(countryCode, "").trim();

    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("phone", phoneNumber);
    form.append("portfolio", formData.portfolio);
    form.append("experience", formData.experience);
    form.append("resumeUrl", formData.resumeUrl);
    form.append("designation", selectedJobTitle);


    console.log("Form Data Being Sent:", formData);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });


      console.log(formData)

      if (response.ok) {
        toast.success("Your application has been submitted successfully!");
        setTimeout(() => {
          setPopupVisible(false);
          setSelectedJob(false);
        }, 2000);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          portfolio: "",
          experience: "",
          resumeUrl: "",
        });

        const appliedJobIds =
          JSON.parse(localStorage.getItem("appliedJobIds")) || [];
        if (!appliedJobIds.includes(selectedJob)) {
          appliedJobIds.push(selectedJob);
          localStorage.setItem("appliedJobIds", JSON.stringify(appliedJobIds));
        }
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      toast.error("Error submitting form. Please check the console for details.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 p-6 rounded shadow-lg w-full max-w-md relative">
        {(loading || uploading) && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500">
            <div className="loader"></div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="text-white">
          <h2 className="mb-[20px]">Applied for : {selectedJobTitle}</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full p-2 border-white border rounded bg-transparent"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full p-2 border-white border rounded bg-transparent"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border-white border rounded bg-transparent"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium mb-1">
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputClass="w-full p-2 border border-white rounded bg-transparent text-white !bg-transparent"
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                containerClass="w-full border border-white rounded bg-transparent"
                dropdownClass="bg-white text-black border border-gray-300 rounded shadow-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="portfolio" className="block font-medium mb-1">
              Portfolio Link
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              className="w-full p-2 border-white border rounded bg-transparent"
              value={formData.portfolio}
              onChange={handleChange}
              
            />
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="block font-medium mb-1">
              Experience (in months)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              className="w-full p-2 border-white border rounded bg-transparent"
              value={formData.experience}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="resume" className="block font-medium mb-1">
              Resume (PDF only)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept="application/pdf"
              className="w-full p-2 border-white border rounded bg-transparent"
              onChange={handleFileUpload}
            />
            {formData.resumeUrl && (
              <p className="text-sm mt-2">
                Uploaded:{" "}
                <a
                  href={formData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View Resume
                </a>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full"
            disabled={uploading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;