// import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

// const UseProject = (currentPage) => {
//     const [totalProject, setTotalProject] = useState([])
//     const [pageLoading, setLoadin] = useState(true)
//     // console.log('Loading',pageLoading);

//     const totalPages = Math.ceil(totalProject / 6)
//     const pageNumbers = [...Array(totalPages).keys()] //totalPages jothy 5 thake tahole 5 index korar jonno 

//     useEffect(() => {
//         fetch('http://localhost:5000/totalProject')
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(data);
//                 console.log('data.totalProjects', data.totalProjects)
//                 // setData(data.result);
//                 setTotalProject(data.totalProjects);
//                 setLoadin(true)
//             })
//     }, [])

//     // useEffect(() => {
//     //     fetch(`http://localhost:5000/project?page=${currentPage}`)
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         setData(data)
//     //     })
//     // },[currentPage])

//     // useQuery use kortece karon amader refetch ta lagbe
//     const { data: allProject = [], refetch } = useQuery({
//         queryKey: ['allProject', currentPage],
//         // enabled: !pageLoading,
//         queryFn: async () => {
//             //token lagtese na bole amra 'useAxiosSecure' use kortece na
//             //useQuery use kortece karon amader refetch ta lagbe
//             const res = await fetch(`http://localhost:5000/project?page=${currentPage}`);
//             setLoadin(false);
//             return res.json();
//         }
//     })
    
//     //useEffect er vitore async await diye o kora jay
//     // useEffect(()=> {
//     //     async function fectData(){
//     //         const response = await fetch(`http://localhost:5000/project?page=${currentPage}&limit=${itemPerPage}`)
//     //         const data = await response.json();
//     //         console.log('shortData',data)
//     //         setData(data);
//     //     }
//     //     fectData();
//     // }, [currentPage, itemPerPage ])


//     // function handleSelectChange (event) {

//     //     setCurrentPage(parseInt(event.target.value));
//     // }

//     return [allProject, pageNumbers, refetch, pageLoading, currentPage];
// };

// export default UseProject;
