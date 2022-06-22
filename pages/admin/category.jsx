import React from 'react';
import AdminLayout from '../../components/admin/adminLayout';
import { useState ,useEffect} from 'react';
import { Button, Checkbox, Form, Input } from "antd";
import { createCategory,updateCategory,  } from '../../functions/category';
import {
    useCollectionData,
    useDocumentData,
  } from "react-firebase-hooks/firestore";
  import { query,collection,orderBy } from 'firebase/firestore';
  import {db} from '../../firebase';
  import {globaluse} from '../../context/global';

const Category = () => {

const [isupdate,setIsupdate] = useState(false);
const [catid,setCatid] = useState('');

const {allcategory} = globaluse();


    const q = query(
        collection(db, "Categories2"),
        orderBy("name", "asc"),
      );
      const [categories, loading] = useCollectionData(q);
     // console.log('categories--->⚡⚡', categories);
    //  const [chat] = useDocumentData(doc(db, "chats", id));




    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
    

      const Createorupdate = async (values,) => {
        // e.preventDefault();
    
    
    
        const { category} = values;
    console.log('Category--->>>', category);

if (!isupdate) {


    createCategory(category);
}


else if (isupdate) {

    updateCategory(catid,category);
}
      };








    return (
        <div>
          

          <AdminLayout>


<h1 className=' text-2xl mb-12'>category </h1>


<div className=' sm:w-[300px]  lg:w-[450px]'>

<Form
     onFinish={Createorupdate}
     onFinishFailed={onFinishFailed}
     autoComplete="off"

> 

<Form.Item label="Category Name "    name="category">
        <Input placeholder="Category name" />
      </Form.Item>
      <Form.Item >
        <Button htmlType="submit" type="primary">Create</Button>
      </Form.Item>
    </Form>
</div>


{/* --maap all categories */}


<div className='mt-12 ml-4 mb-12 pb-12'>


<div className=' '>



    { allcategory?.map((category,index) => {

        return (

            <div key ={index} className=' my-2 font-bold  text-xl text-[#096dd9] '>
            
<div className=' w-[144px] flex gap-2'>
    <p className=' w-[85px]'>{category?.name}</p>
    <p
   onClick ={() => {

    setCatid(category?.id);
    console.log('catid--->>>', catid);
    setIsupdate(true);
   }
   }
    className=' ml-[13px] mt-[7px]'><img className=' w-4 h-4 rounded-full' src='https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614397-x-256.png' alt="" /></p>
</div>


            </div>
        )})}
</div>



</div>



</AdminLayout>


        </div>
    );
}

export default Category;