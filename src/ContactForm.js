import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォーム送信ロジック（例：バックエンドAPIに送信など）
    console.log('フォーム送信:', formData);
  };

  return (
    <section>
      <h2>お問い合わせフォーム</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>メールアドレス:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>メッセージ:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">送信</button>
      </form>
    </section>
  );
}

export default ContactForm;
