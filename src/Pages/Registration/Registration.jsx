import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Registration = () => {
  const { createUser, profileUpdate } = useAuth();
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
              .post('http://localhost:5000/employees', employeeInfo)
              .then(res => {
                if (res.data.insertedId) {
                  reset();
                  // return alert('added successfuly');
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'user add successfully',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          });
        })
        .catch(error => console.log(error));
    }
  };
  return (
    <div className="w-4/5 mx-auto bg-slate-100 my-5 px-6 py-7 grid grid-cols-2 ">
      <div></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-purple-300 px-5 py-6 rounded-lg"
      >
        <div className="grid grid-cols-2 gap-4 items-center ">
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register('name', { required: true })}
              required
              className=" w-full px-6 py-3 rounded-lg outline-none"
            />
            {errors.name && (
              <span className="text-red-400">Name is required</span>
            )}
          </div>
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              required
              className=" w-full px-6 py-3 rounded-lg outline-none"
            />
            {errors.email && (
              <span className="text-red-400">Email is required</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center ">
          <div className="form-control w-full my-6 space-y-3">
            <label className="label">
              <span className="label-text">Bank Account No.</span>
            </label>
            <input
              type="text"
              placeholder="Bank Account No."
              {...register('account', { required: true })}
              required
              className=" w-full px-6 py-3 rounded-lg outline-none"
            />
            {errors.account && (
              <span className="text-red-400">Bank Account No. is required</span>
            )}
          </div>
          <div className="form-control w-full my-6 space-y-3">
            <label className="label">
              <span className="label-text">Salary</span>
            </label>
            <input
              type="number"
              placeholder="Salary"
              {...register('salary', { required: true })}
              required
              className=" w-full px-6 py-3 rounded-lg outline-none"
            />
            {errors.salary && (
              <span className="text-red-400">Salary is required</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center ">
          <div className="form-control w-full  space-y-3">
            <label className="label">
              <span className="label-text">User Role</span>
            </label>
            <select
              {...register('role', { required: true })}
              className=" w-full px-6 py-3 rounded-lg outline-none"
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
              className=" w-full px-6 py-3 rounded-lg outline-none"
            />
            {errors.designation && (
              <span className="text-red-400">Designation is required</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center ">
          <div className="form-control w-full">
            <input
              {...register('image', { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
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
              className=" w-full px-6 py-3 rounded-lg outline-none"
            />
            {errors.password && (
              <span className="text-red-400">Password is required</span>
            )}
          </div>
        </div>

        <button className="btn px-3 py-2 text-white bg-green-500 hover:bg-green-600">
          Registration
        </button>
      </form>
      <Link to="/login">login</Link>
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
