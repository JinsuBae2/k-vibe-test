import axios from 'axios';

const API_BASE_URL = 'http://viral-quiz-platform-production.up.railway.app/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getQuizzes = () => api.get('/quizzes');
export const getQuizById = (id) => api.get(`/quizzes/${id}`);
export const submitQuiz = (id, totalScore) => api.post(`/quizzes/${id}/submit`, { totalScore });

export default api;
