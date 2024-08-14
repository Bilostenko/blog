import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store'; // Вкажіть правильний шлях до вашого store

export const useTypedDispatch = () => useDispatch<AppDispatch>();
