import React ,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Experience.css'

export const Experience = () => {
     useEffect(() => {
    const elements = document.querySelectorAll(".exp-grid-text");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className='experience pb-5'>
      <div className="experience-text text-center pt-0 p-4">
        <h2 className=''>Thông tin đảm bảo</h2>
      </div>
      <div className="container">
         <div className="exp-grid container">
          <div className="row ">
            <div className="col-md-6 mb-4">
                <div className="from-left exp-grid-text d-flex align-items-center p-3 shadow-sm bg-light rounded">
                    <div className="exp-check-icon me-3">
                        <i className="fas fa-check-circle fa-3x text-success"></i>
                    </div>
                    <div className="exp-text px-2">
                        <h5> Kinh nghiệm đào tạo</h5>
                        <span className='exp-content'>
                            Với nhiều năm kinh nghiệm trong lĩnh vực đào tạo ngành học thiết kế lập trình website fullstack, giảng dạy cho hàng nghìn bạn coder có kỹ năng và tay nghề cao, cung cấp nguồn nhân lực chất lượng cao.</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="exp-grid-text d-flex align-items-center p-3 shadow-sm bg-light rounded">
                    <div className="exp-check-icon me-3">
                        <i className="fas fa-check-circle fa-3x text-success"></i>
                    </div>
                    <div className="exp-text px-2">
                        <h5 className=''> Chương trình đào tạo</h5>
                        <span className='exp-content'>
                            Chương trình đào tạo được biên soạn cô đọng, súc tính, đảm bảo tính thực tiễn, giúp cho học viên mô phỏng công việc thực tế sau khi kết thúc quá trình học tập. Giúp học viên học hiệu quả
                            </span>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="from-left exp-grid-text d-flex align-items-center p-3 shadow-sm bg-light rounded">
                    <div className="exp-check-icon me-3">
                        <i className="fas fa-check-circle fa-3x text-success"></i>
                    </div>
                    <div className="exp-text px-2">
                        <h5>Đội ngũ đào tạo</h5>
                        <span className="exp-content">
                            Nhiều năm kinh nghiệm trong lĩnh vực đào tạo ngành học thiết kế lập trình website fullstack, 
                            giảng dạy cho hàng nghìn bạn coder có kỹ năng và tay nghề cao, cung cấp nguồn nhân lực chất lượng cao.
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="exp-grid-text d-flex align-items-center p-3 shadow-sm bg-light rounded">
                    <div className="exp-check-icon me-3">
                        <i className="fas fa-check-circle fa-3x text-success"></i>
                    </div>
                    <div className="exp-text px-2">
                        <h5> Cam kết đào tạo</h5>
                        <span className='exp-content'>
                            Khóa học được thiết kế với phương pháp học tập linh hoạt, kết hợp giữa lý thuyết và thực hành. Học viên sẽ có cơ hội thực hành ngay trong quá trình học, từ đó nắm vững kiến thức một cách nhanh chóng và hiệu quả.</span>
                    </div>
                </div>
            </div>
      </div>
      </div>
    </div>
    </div>
  )
}
