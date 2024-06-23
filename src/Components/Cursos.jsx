import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaBars, FaFileExcel, FaFilePdf, FaEdit, FaTrash } from 'react-icons/fa';
import Menu from './menú';
import MyPdfViewer from './MyPdfViewer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CursosPdf from './CursosPdf';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { UserContext } from '../App';

const Cursos = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('501');
  const [admin, setAdmin] = useState([]);
  const { userData } = useContext(UserContext);
  const [token, setToken] = useState(null);

  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [newCourseNumber, setNewCourseNumber] = useState('');
  const [message, setMessage] = useState('');
  const [editCourseNumber, setEditCourseNumber] = useState('');
  const [courseToEdit, setCourseToEdit] = useState(null);

  const [confirmDelete, setConfirmDelete] = useState(false);

  // Estado para la creación de estudiantes
  const [showCreateStudent, setShowCreateStudent] = useState(false);
  const [newStudent, setNewStudent] = useState({
    ID_Estudiante: '',
    P_Nombre: '',
    S_Nombre: '',
    T_Nombre: '',
    P_Apellido: '',
    S_Apellido: '',
    Genero: '',
    T_Documento: '',
    Curso: '',
    Administradores: '1022926852',
    Registro: '0'
  });


  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      console.log(token);
    }
  }, [token]);


  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://192.168.2.108:3000/api/estudiantes');
        setStudents(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(`http://192.168.2.108:3000/api/administradores/${userData.ID_Admin}`);
        setAdmin(response.data.data);

      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchAdmin();
  }, [userData.ID_Admin]);
  
  useEffect(() => {
    if (admin.Rol === 'Docente') {
      setSelectedCourse(admin.Curso);
    }
  }, [admin.Rol, admin.Curso]);

  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://192.168.2.108:3000/api/cursos');
        const sortedCourses = response.data.data.sort((a, b) => a.Num_Curso - b.Num_Curso);
        setCourses(sortedCourses);
        console.log('Sorted Courses:', sortedCourses);
  
        // Imprimir solo los ID_Curso
        sortedCourses.forEach(course => {
          console.log('ID_Curso:', course.ID_Curso);
        });
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };
  
    fetchCourses();
  }, []);
  
  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  const exportarAExcel = (datosApi, nombreArchivo) => {
    const tipoArchivo = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const extensionArchivo = '.xlsx';

    const hoja = XLSX.utils.json_to_sheet(datosApi);
    const libro = { Sheets: { data: hoja }, SheetNames: ['data'] };
    const bufferExcel = XLSX.write(libro, { bookType: 'xlsx', type: 'array' });
    const datos = new Blob([bufferExcel], { type: tipoArchivo });
    FileSaver.saveAs(datos, nombreArchivo + extensionArchivo);
  };

  const handleInstructions = () => {
    setShowPdf(true);
    setIsMenuOpen(false);
  };

  const handleCreateCourseClick = () => {
    setShowCreateCourse(!showCreateCourse);
    setCourseToEdit(null);
  };

  const handleCreateCourse = async () => {
    const courseData = { Num_Curso: newCourseNumber };

    try {
      const response = await axios.post('http://192.168.2.108:3000/api/cursos/create', courseData);
      console.log('Curso creado:', response.data);
      setMessage('Curso creado correctamente');
      setCourses([...courses, courseData]);
      setShowCreateCourse(false);
      setNewCourseNumber('');
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('Error al crear el curso:', error);
      setMessage('Error al crear el curso');
      setTimeout(() => setMessage(''), 5000);
    }
  };

  const handleEditCourseClick = (course) => {
    if (courseToEdit && courseToEdit.ID_Curso === course.ID_Curso) {
      setCourseToEdit(null);
    } else {
      setCourseToEdit(course);
      setEditCourseNumber(course.ID_Curso);
    }
    setShowCreateCourse(false);
  };

  const handleUpdateCourse = async () => {
    const updatedCourseData = { ID_Curso: editCourseNumber };

    try {
      const response = await axios.put(`http://192.168.2.108:3000/api/cursos/${courseToEdit.ID_Curso}`, updatedCourseData);
      console.log('Curso actualizado:', response.data);
      setMessage('Curso actualizado correctamente');
      setCourses(courses.map(course => (course.ID_Curso === courseToEdit.ID_Curso ? updatedCourseData : course)));
      setCourseToEdit(null);
      setEditCourseNumber('');
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('Error al actualizar el curso:', error);
      setMessage('Error al actualizar el curso');
      setTimeout(() => setMessage(''), 5000);
    }
  };

  const handleDeleteCourseClick = () => {
    setConfirmDelete(!confirmDelete);
  };

  const handleDeleteCourse = async (courseNum) => {
    try {
      await axios.delete(`http://192.168.2.108:3000/api/cursos/${courseNum}`);
      console.log('Curso eliminado:', courseNum);
      setMessage('Curso eliminado correctamente');
      setCourses(courses.filter(course => course.Num_Curso !== courseNum));
      setConfirmDelete(false);
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('Error al eliminar el curso:', error);
      setMessage('Error al eliminar el curso');
      setTimeout(() => setMessage(''), 5000);
    }
  };

  const handleCreateStudentClick = () => {
    setShowCreateStudent(!showCreateStudent);
  };

  const handleCreateStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCreateStudent = async () => {
    // Encontrar el curso seleccionado en la lista de cursos
    const selectedCourseObj = courses.find(course => course.Num_Curso === selectedCourse);
  
    if (!selectedCourseObj) {
      setMessage('Error: Curso seleccionado no encontrado');
      setTimeout(() => setMessage(''), 5000);
      return;
    }
  
    // Asignar el ID_Curso del curso seleccionado
    const newStudentData = {
      ...newStudent,
      Curso: selectedCourseObj.ID_Curso,
    };
  
    try {
      const response = await axios.post('http://192.168.2.108:3000/api/estudiantes/create', newStudentData);
      console.log('Estudiante creado:', response.data);
      setMessage('Estudiante creado correctamente');
      setStudents([...students, response.data.data]); // Asegúrate de agregar la respuesta del servidor, no `newStudent`
      setShowCreateStudent(false);
      setNewStudent({
        ID_Estudiante: '',
        P_Nombre: '',
        S_Nombre: '',
        T_Nombre: '',
        P_Apellido: '',
        S_Apellido: '',
        Genero: '',
        T_Documento: '',
        Curso: '',
        Administradores: '1022926852',
        Registro: '0'
      });
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('Error al crear el estudiante:', error);
      setMessage('Error al crear el estudiante');
      setTimeout(() => setMessage(''), 5000);
    }
  };
  

  if (showPdf) {
    return <MyPdfViewer file="/ManualDeInstruccionesValiny.pdf" setShowPdf={setShowPdf} />;
  }

  const filteredStudents = students.filter(student => student.Curso === selectedCourse);

  return (
    <div className="relative container mx-auto px-4 sm:px-8">
      {isMenuOpen && <Menu setToken={setToken} onClose={() => setIsMenuOpen(false)} onInstructionsClick={handleInstructions} />}
      <div className="py-8">
        <div className='flex flex-row'>
          <button onClick={handleMenu}>
            <FaBars size={40} />
          </button>
          <h2 className='text-5xl text-center mb-5 px-96'>Lista de cursos</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="mb-4 flex items-center space-x-4">
{admin && admin.Rol === 'Docente' && (
  
  <p>Curso: {selectedCourse}</p>
)}
          {admin && admin.Rol !== 'Docente' && (
            <>
            <label htmlFor="curso" className="text-lg font-semibold mb-4">Seleccione un curso:</label>
            <select
              id="curso"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {courses.map(course => (
                <option key={course.Num_Curso} value={course.Num_Curso}>
                  Curso {course.Num_Curso}
                </option>
              ))}
            </select>
            </>)}

            {admin && admin.Rol === 'SuperAdmin' && (
            <>
            <button
              onClick={handleCreateCourseClick}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Crear nuevo curso
            </button>
            <button
              onClick={() => handleEditCourseClick({ Num_Curso: selectedCourse })}
              className="text-yellow-500 hover:text-yellow-700 mr-2"
            >
              <FaEdit />
            </button>
            <button
              onClick={handleDeleteCourseClick}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
            </>)}
            {admin && admin.Rol === 'SuperAdmin' && (
            <>
            <button
              onClick={handleCreateStudentClick}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Crear nuevo estudiante
            </button>
            </>)}
          </div>
          {showCreateCourse && (
            <div className="mb-4">
              <label htmlFor="newCourseNumber" className="text-lg font-semibold mb-2">Número del nuevo curso:</label>
              <input
                id="newCourseNumber"
                type="number"
                maxLength={4}
                value={newCourseNumber}
                onChange={(e) => setNewCourseNumber(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 mr-2"
              />
              <button
                onClick={handleCreateCourse}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Confirmar
              </button>
            </div>
          )}
          {courseToEdit && (
            <div className="mb-4">
              <label htmlFor="editCourseNumber" className="text-lg font-semibold mb-2">Editar número del curso:</label>
              <input
                id="editCourseNumber"
                type="number"
                maxLength={4}
                value={editCourseNumber}
                onChange={(e) => setEditCourseNumber(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 mr-2"
              />
              <button
                onClick={handleUpdateCourse}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Actualizar
              </button>
            </div>
          )}
          {confirmDelete && (
            <div className="mb-4">
              <p className="text-lg font-semibold mb-2">¿Está seguro de eliminar el curso {selectedCourse}?</p>
              <button
                onClick={() => handleDeleteCourse(selectedCourse)}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Sí, eliminar
              </button>
              <button
                onClick={handleDeleteCourseClick}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          )}
          {showCreateStudent && (
            <div className="mb-4">
              <div className="flex mb-2">
    <label htmlFor="ID_Estudiante" className="text-lg font-semibold mr-2">Documento:</label>
    <input
      id="ID_Estudiante"
      name="ID_Estudiante"
      type="text"
      value={newStudent.ID_Estudiante}
      onChange={handleCreateStudentChange}
      className="border border-gray-300 rounded px-2 py-1 mr-2"
    />
  </div>
  <div className="flex mb-2">
              <label htmlFor="P_Nombre" className="text-lg font-semibold mb-2 mr-2">Primer Nombre:</label>
              <input
                id="P_Nombre"
                name="P_Nombre"
                type="text"
                value={newStudent.P_Nombre}
                onChange={handleCreateStudentChange}
                className="border border-gray-300 rounded px-2 py-1 mr-2"
              />
  </div>
  <div className="flex mb-2">
              <label htmlFor="S_Nombre" className="text-lg font-semibold mb-2 mr-2">Segundo Nombre:</label>
              <input
                id="S_Nombre"
                name="S_Nombre"
                type="text"
                value={newStudent.S_Nombre}
                onChange={handleCreateStudentChange}
                className="border border-gray-300 rounded px-2 py-1 mr-2"
              />
                </div>
                <div className="flex mb-2">
              <label htmlFor="T_Nombre" className="text-lg font-semibold mb-2 mr-2">Tercer Nombre:</label>
              <input
                id="T_Nombre"
                name="T_Nombre"
                type="text"
                value={newStudent.T_Nombre}
                onChange={handleCreateStudentChange}
                className="border border-gray-300 rounded px-2 py-1 mr-2"
              />
                              </div>
                              <div className="flex mb-2">           
              <label htmlFor="P_Apellido" className="text-lg font-semibold mb-2 mr-2">Primer Apellido:</label>
              <input
                id="P_Apellido"
                name="P_Apellido"
                type="text"
                value={newStudent.P_Apellido}
                onChange={handleCreateStudentChange}
                className="border border-gray-300 rounded px-2 py-1 mr-2"
              />
                                            </div>
                                            <div className="flex mb-2">     
              <label htmlFor="S_Apellido" className="text-lg font-semibold mb-2 mr-2">Segundo Apellido:</label>
              <input
                id="S_Apellido"
                name="S_Apellido"
                type="text"
                value={newStudent.S_Apellido}
                onChange={handleCreateStudentChange}
                className="border border-gray-300 rounded px-2 py-1 mr-2"
              />
              </div>
              <div className="flex mb-2">
             <label htmlFor="Genero" className="text-lg font-semibold mb-2 ">Género:</label>
             <select
    id="Genero"
    name="Genero"
    value={newStudent.Genero}
    onChange={handleCreateStudentChange}
    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
  >
                    <option value="">Seleccione</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
              </select>
              </div>
              <div className="flex mb-2">
              <label htmlFor="T_Documento" className="text-lg font-semibold mb-2">Tipo de Documento:</label>
              <select
                id="T_Documento"
                name="T_Documento"
                type="text"
                value={newStudent.T_Documento}
                onChange={handleCreateStudentChange}
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
>
                <option value="">Seleccione</option>
                <option value="1">Cédula de Ciudadanía</option>
                <option value="2">Tarjeta de Identidad</option>
                <option value="3">Cédula de Extranjería</option>
                <option value="4">Registro Civil de Nacimiento</option>
              </select>
              </div>
              

              <button
                onClick={handleCreateStudent}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Confirmar
              </button>
            </div>
          )}
          {message && (
            <div className="mb-4 text-green-500">
              {message}
            </div>
          )}
          <div className="inline-block min-w-full shadow rounded-lg overflow-y-auto h-96">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
                    Número
                  </th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
                    Documento
                  </th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
                    Nombres
                  </th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
                    Registro de Asistencia
                  </th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
                    Editar Registo
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={student.Documento} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{index + 1}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{student.Documento}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{student.Nombres}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{student.Registro}</td>
                     <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">                    <button
              onClick={() => handleEditCourseClick([student.Documento])}
              className="text-yellow-500 hover:text-yellow-700 mr-2"
            >
              <FaEdit />
            </button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {admin && admin.Rol !== 'Docente' && (
            <>
              <h2>Descargar en:</h2>
              <div className="flex justify-center space-x-10 mt-10">
                <div className="flex flex-col items-center">
                  <PDFDownloadLink document={<CursosPdf students={filteredStudents} />} fileName={`Registro_de_lista_de_cursos-${new Date().toISOString().split('T')[0]}.pdf`}>
                    {({ blob, url, loading, error }) =>
                      loading ? 'Cargando documento...' : <FaFilePdf size={50} color="red" />
                    }
                  </PDFDownloadLink>
                  <span>PDF</span>
                </div>
                <div className="flex flex-col items-center">
                  <button onClick={() => exportarAExcel(filteredStudents, `Lista_de_cursos_${new Date().toISOString().split('T')[0]}`)}>
                    <FaFileExcel size={50} color="green" />
                  </button>
                  <span>Excel</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
