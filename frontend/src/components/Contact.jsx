import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || '메시지가 성공적으로 전송되었습니다!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.message || '메시지 전송에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('메시지 전송 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card-glass p-4 p-md-5">
            <h2 className="text-center mb-4">연락하기</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">이름</label>
                <input
                  type="text"
                  className="form-control form-control-glass"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">이메일</label>
                <input
                  type="email"
                  className="form-control form-control-glass"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">메시지</label>
                <textarea
                  className="form-control form-control-glass"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">보내기</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
