import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { FaBars } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Menu from './menú';
import ReportesPdf from './ReportesPdf';
import MyPdfViewer from './MyPdfViewer';
import { useNavigate } from 'react-router-dom';

const Reportes = ({ setToken }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const navigate = useNavigate();
  const barSvgRef = useRef();
  const donutSvgRef = useRef();

  const fecha = new Date();
  const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`;

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleInstructions = () => {
    setShowPdf(true);
    closeMenu();
  };

  const handleEspecificos = () => {
    navigate('/ReporteEspecifico');
  };

  useEffect(() => {
    // Limpia los SVG antes de renderizar
    d3.select(barSvgRef.current).selectAll('*').remove();
    d3.select(donutSvgRef.current).selectAll('*').remove();

    // Datos del gráfico de barras
    const barData = [
      { name: 'Asistencia', value: 5.4054 },
      { name: 'Falla', value: 94.5946 },
      { name: 'Retardo', value: 0 },
      { name: 'Evasion', value: 0 },
      { name: 'Falla Just', value: 0 },
    ];

    const barWidth = 300;
    const barHeight = 200;
    const barMargin = { top: 20, right: 20, bottom: 30, left: 40 };

    const x = d3.scaleBand()
      .domain(barData.map(d => d.name))
      .range([barMargin.left, barWidth - barMargin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(barData, d => d.value)]).nice()
      .range([barHeight - barMargin.bottom, barMargin.top]);

    const barSvg = d3.select(barSvgRef.current)
      .attr('width', barWidth)
      .attr('height', barHeight)
      .attr('viewBox', `0 0 ${barWidth} ${barHeight}`)
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

    barSvg.append('g')
      .selectAll('rect')
      .data(barData)
      .join('rect')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value))
      .attr('height', d => y(0) - y(d.value))
      .attr('width', x.bandwidth())
      .attr('fill', '#3182ce'); // Color de las barras

    barSvg.append('g')
      .attr('transform', `translate(0,${barHeight - barMargin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    barSvg.append('g')
      .attr('transform', `translate(${barMargin.left},0)`)
      .call(d3.axisLeft(y));

    // Datos del gráfico de dona
    const donutData = [
      { name: "Asistencia", value: 5.4054 },
      { name: "Falla", value: 94.5946 },
      { name: "Retardo", value: 0 },
      { name: "Evasion", value: 0 },
      { name: "Falla Justificada", value: 0 }
    ];

    const donutWidth = 200;
    const donutHeight = 200;
    const radius = Math.min(donutWidth, donutHeight) / 2;

    const color = d3.scaleOrdinal()
      .domain(donutData.map(d => d.name))
      .range(['#3182ce', '#90cdf4', '#63b3ed', '#4299e1', '#2b6cb0']); // Colores de las secciones de la dona

    const pie = d3.pie()
      .sort(null)
      .value(d => d.value);

    const arc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const outerArc = d3.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    const donutSvg = d3.select(donutSvgRef.current)
      .attr('width', donutWidth)
      .attr('height', donutHeight)
      .append('g')
      .attr('transform', `translate(${donutWidth / 2},${donutHeight / 2})`);

    const slices = donutSvg.selectAll('path.slice')
      .data(pie(donutData))
      .enter().append('path')
      .attr('class', 'slice')
      .attr('d', arc)
      .attr('fill', d => color(d.data.name));

    donutSvg.selectAll('text')
      .data(pie(donutData))
      .enter().append('text')
      .attr('dy', '.35em')
      .attr('transform', function(d) {
        const pos = outerArc.centroid(d);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .attr('text-anchor', function(d) {
        return midAngle(d) < Math.PI ? 'start' : 'end';
      })
      .text(d => d.data.name);

    function midAngle(d) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

  }, []);

  if (showPdf) {
    return <MyPdfViewer file="/ManualDeInstruccionesValiny.pdf" />;
  }

  const data = [
    { categoria: 'Asistencia', porcentaje: 5.4054 },
    { categoria: 'Falla', porcentaje: 94.5946 },
    { categoria: 'Retardo', porcentaje: 0 },
    { categoria: 'Evasion', porcentaje: 0 },
    { categoria: 'Falla Justificada', porcentaje: 0 },
  ];

  return (
    <div className="relative container mx-auto px-4 sm:px-8">
      {isMenuOpen && <Menu setToken={setToken} onClose={closeMenu} onInstructionsClick={handleInstructions} />}
      <div className="py-8">
        <div className='flex flex-row'>
          <button onClick={handleMenu}>
            <FaBars size={40} />
          </button>
          <h1 className="flex-grow text-center text-5xl font-bold mb-5 px-96">Reporte Específico</h1>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif">
                    Categoría
                  </th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif">
                    Porcentaje
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif">{item.categoria}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif">{item.porcentaje}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-around mt-5">
          <svg ref={barSvgRef}></svg>
          <svg ref={donutSvgRef}></svg>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="bg-blue-200 hover:bg-blue-300 text-gray-600 font-semibold py-2 px-4 rounded"
            onClick={handleEspecificos}
          >
            Reporte Específico
          </button>
        </div>
        <div className="mt-5 text-center">
          <PDFDownloadLink document={<ReportesPdf />} fileName={`Registro_de_lista_de_reportes-${fechaFormateada}.pdf`}>
            {({ blob, url, loading, error }) => loading ? 'Cargando documento...' : 'Descargar los Reportes PDF'}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Reportes;
