import React, { useState } from 'react';

const SpeakingPractice = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Xin chào! Tôi là AI hỗ trợ luyện nói tiếng Anh. Hãy bắt đầu nhé! 😊' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    // Fake AI response (không cần OpenAI API)
    setTimeout(() => {
      const aiResponses = [
        "Great! Your sentence is correct. Keep practicing! 👍",
        "Good job! Try using 'because' to explain why. 😊",
        "Excellent pronunciation! Now try a longer sentence.",
        "Perfect! You're improving fast! 🎉",
        "Very good! Next time, use past tense for yesterday."
      ];
      const randomReply = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages([...newMessages, { role: 'ai', content: randomReply }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          🎤 Luyện Nói Tiếng Anh với AI
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Chat với AI để luyện nói. AI sẽ sửa lỗi và đưa gợi ý!
        </p>

        {/* Chat Messages */}
        <div className="h-96 bg-gray-50 rounded-lg p-6 overflow-y-auto mb-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white shadow-sm border'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white shadow-sm border rounded-lg px-4 py-3 max-w-xs lg:max-w-md">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span className="text-sm text-gray-500">AI đang suy nghĩ...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Viết câu tiếng Anh của bạn ở đây..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
          >
            Gửi
          </button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">💡 Mẹo luyện nói:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• "What did you do yesterday?"</li>
            <li>• "I like learning English because..."</li>
            <li>• "My favorite food is..."</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpeakingPractice;