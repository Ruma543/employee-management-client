import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button } from 'flowbite-react';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const registerimage = 'https://i.ibb.co/RP58FGj/register.jpg';
const Registration = () => {
  const { createUser, profileUpdate } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async data => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const imgRes = await axios.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    console.log(imgRes.data);
    if (imgRes.data.success) {
      createUser(data.email, data.password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          console.log(imgRes.data.data.display_url);
          profileUpdate(data.name, imgRes.data.data.display_url).then(() => {
            const employeeInfo = {
              name: data.name,
              email: data.email,
              image: imgRes.data.data.display_url,
              bankAccount: data.account,
              salary: parseInt(data.salary),
              role: data.role,
              designation: data.designation,
              verified: false,
            };
            console.log(employeeInfo);
            axios
              .post(
                'https://employee-management-server-tau.vercel.app/employees',
                employeeInfo
              )
              .then(res => {
                if (res.data.insertedId) {
                  reset();
                  // return alert('added successfuly');
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Employee add successfully',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/');
                }
              });
          });
        })
        .catch(error => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Employee Information  is missing!',
            showConfirmButton: true,
          });
        });
    }
  };
  return (
    <div
      className="lg:w-3/5 w-11/12 mx-auto rounded-lg shadow-lg my-5 px-6 py-7 grid  grid-cols-1 "
      // style={{
      //   backgroundImage: `url(${registerimage})`,
      //   backgroundSize: 'cover',
      //   // borderRadius: '50%',
      //   overflow: 'hidden',
      //   // transition: 'transform 0.3s ease-in-out',
      //   // transform: isHovered ? 'scale(1.2)' : 'scale(1)',
      // }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-5 bg-black/90 py-6 rounded-lg text-white"
      >
        <p className="text-center text">
          Already Register Please{' '}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>{' '}
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center ">
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">Employee Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register('name', { required: true })}
              required
              className=" w-full px-6 py-3 rounded-lg  text-black outline-none"
            />
            {errors.name && (
              <span className="text-red-400">Name is required</span>
            )}
          </div>
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">Employee Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              required
              className=" w-full text-black px-6 py-3 rounded-lg outline-none"
            />
            {errors.email && (
              <span className="text-red-400">Email is required</span>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center ">
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">Bank Account No.</span>
            </label>
            <input
              type="text"
              placeholder="Bank Account No."
              {...register('account', { required: true })}
              required
              className=" w-full px-6 text-black py-3 rounded-lg outline-none"
            />
            {errors.account && (
              <span className="text-red-400">Bank Account No. is required</span>
            )}
          </div>
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">Salary</span>
            </label>
            <input
              type="number"
              placeholder="Salary"
              {...register('salary', { required: true })}
              required
              className=" w-full px-6 py-3  text-black rounded-lg outline-none"
            />
            {errors.salary && (
              <span className="text-red-400">Salary is required</span>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center ">
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">User Role</span>
            </label>
            <select
              {...register('role', { required: true })}
              className=" w-full px-6 py-3 text-black rounded-lg outline-none"
              name="role"
              id=""
              defaultValue="default"
            >
              <option disabled value="default"></option>
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
              <option value="employee">Employee</option>
            </select>
            {errors.role && (
              <span className="text-red-400">Role is required</span>
            )}
          </div>
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <input
              type="text"
              placeholder="Designation"
              {...register('designation', { required: true })}
              required
              className=" w-full text-black px-6 py-3 rounded-lg outline-none"
            />
            {errors.designation && (
              <span className="text-red-400">Designation is required</span>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center ">
          <div className="form-control w-full mt-4">
            <input
              {...register('image', { required: true })}
              type="file"
              className="file-input bg-green-500 w-full max-w-xs"
            />
            {errors.image && (
              <span className="text-red-400">Image upload is required</span>
            )}
          </div>
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
              })}
              placeholder="Password"
              {...register('password', { required: true })}
              required
              className=" w-full text-black px-6 py-3 rounded-lg outline-none"
            />
            {errors.password && (
              <span className="text-red-400">Password is required</span>
            )}
            {errors.password?.type === 'minLength' && (
              <span className="text-red-400">
                Password must be 6 characters
              </span>
            )}
            {errors.password?.type === 'pattern' && (
              <span className="text-red-400">
                Password must be one uppercase & one special character
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          {' '}
          <Button
            className="bg-green-500 my-4 text-center hover:bg-green-800"
            type="submit"
          >
            Registration
          </Button>
        </div>
        {/* <button className=" px-3 py-2 my-4 text-white bg-green-500 hover:bg-green-800"></button> */}
      </form>
    </div>
  );
};

export default Registration;

// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Container } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// // import { createTheme } from '@mui/material/styles';
// import { createTheme } from '@mui/material';
// // import { ThemeProvider } from '@mui/system/styles';
// // import { createTheme } from '@mui/material/styles';
// // import { styled } from '@mui/material/styles';
// // import Button from '@mui/material/Button';
// // import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// // const VisuallyHiddenInput = styled('input')({
// //   clip: 'rect(0 0 0 0)',
// //   clipPath: 'inset(50%)',
// //   height: 1,
// //   overflow: 'hidden',
// //   position: 'absolute',
// //   bottom: 0,
// //   left: 0,
// //   whiteSpace: 'nowrap',
// //   width: 1,
// // });

// const Registration = () => {
//   const theme = createTheme();
//   return (
//     <ThemeProvider theme={theme}>
//       <Container sx={{ width: '4/5', margin: 'auto' }}>
//         <Box
//           component="form"
//           sx={{
//             '& > :not(style)': { m: 1, width: 'calc(33.33% - 8px)' },
//             //  { m: 1, width: '25ch' },
//             display: 'flex',
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             background: 'transparent',
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField id="filled-basic-1" label="Name" variant="filled" />
//           <TextField id="filled-basic-2" label="Name" variant="filled" />
//           <TextField id="filled-basic-3" label="Name" variant="filled" />
//           <TextField id="filled-basic-3" label="Name" variant="filled" />
//           {/* <Button
//           component="label"
//           variant="contained"
//           // startIcon={<CloudUploadIcon />}
//         >
//           Upload file
//           <VisuallyHiddenInput type="file" />
//         </Button> */}
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Registration;
