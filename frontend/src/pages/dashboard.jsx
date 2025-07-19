import React from 'react';
import { User, Mail, Brain, FileText, TrendingUp, Calendar, BookOpen, Upload, Zap, Award, LogOut, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  // Mock student data
  const student = {
    name: "Sarah Chen",
    email: "sarah.chen@student.edu",
    studentId: "AI2024001",
    totalTests: 12,
    averageScore: 87.3,
    totalStudyMaterials: 24
  };

  const tests = [
    { 
      id: 1, 
      title: "Machine Learning Fundamentals", 
      source: "ML_Chapter_3_Notes.pdf", 
      sourceType: "pdf",
      date: "2024-01-15", 
      totalQuestions: 15, 
      correctAnswers: 14, 
      score: 93, 
      timeSpent: "12m 30s",
      difficulty: "medium",
      aiConfidence: 95
    },
    { 
      id: 2, 
      title: "Data Structures & Algorithms", 
      source: "DSA Study Notes", 
      sourceType: "notes",
      date: "2024-01-18", 
      totalQuestions: 20, 
      correctAnswers: 17, 
      score: 85, 
      timeSpent: "18m 45s",
      difficulty: "hard",
      aiConfidence: 92
    },
    { 
      id: 3, 
      title: "Database Management Systems", 
      source: "DBMS_Lecture_Notes.pdf", 
      sourceType: "pdf",
      date: "2024-01-22", 
      totalQuestions: 12, 
      correctAnswers: 10, 
      score: 83, 
      timeSpent: "9m 15s",
      difficulty: "medium",
      aiConfidence: 88
    },
    { 
      id: 4, 
      title: "Web Development Basics", 
      source: "Frontend Development Notes", 
      sourceType: "notes",
      date: "2024-01-25", 
      totalQuestions: 18, 
      correctAnswers: 16, 
      score: 89, 
      timeSpent: "14m 20s",
      difficulty: "easy",
      aiConfidence: 96
    },
    { 
      id: 5, 
      title: "Computer Networks", 
      source: "Networking_Concepts.pdf", 
      sourceType: "pdf",
      date: "2024-01-28", 
      totalQuestions: 16, 
      correctAnswers: 15, 
      score: 94, 
      timeSpent: "11m 50s",
      difficulty: "medium",
      aiConfidence: 91
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'hard': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-emerald-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-amber-600';
    return 'text-rose-600';
  };

  // Calculate performance metrics
  const totalQuestions = tests.reduce((sum, test) => sum + test.totalQuestions, 0);
  const totalCorrect = tests.reduce((sum, test) => sum + test.correctAnswers, 0);
  const overallAccuracy = Math.round((totalCorrect / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  AI Study Dashboard
                </h1>
                <p className="text-gray-600 mt-1">Track your AI-generated test performance and study progress</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
                <Link to={'/upload'}>
              <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-2xl border-2 border-gray-300 hover:border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Take Test</span>
              </button>  
                </Link>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 flex items-center space-x-2">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Student Profile Card */}
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{student.name}</h2>
                  <p className="text-gray-500 font-medium">ID: {student.studentId}</p>
                  <div className="flex items-center text-gray-600 mt-2">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{student.email}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-2xl shadow-lg">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">AI Powered</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{student.totalTests}</p>
                <p className="text-sm text-gray-600 font-medium">AI Tests Taken</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{student.averageScore}%</p>
                <p className="text-sm text-gray-600 font-medium">Average Score</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <FileText className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{student.totalStudyMaterials}</p>
                <p className="text-sm text-gray-600 font-medium">Study Materials</p>
              </div>
            </div>
          </div>

          {/* Circular Performance Chart */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Overall Accuracy</h3>
              <Award className="w-5 h-5 text-amber-500" />
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 mb-6">
                <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 144 144">
                  {/* Background circle */}
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    className="drop-shadow-sm"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(overallAccuracy / 100) * 377} 377`}
                    className="transition-all duration-1000 ease-out drop-shadow-sm"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {overallAccuracy}%
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Accuracy</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-gray-900">{totalCorrect}</span> correct out of{' '}
                  <span className="font-semibold text-gray-900">{totalQuestions}</span> questions
                </p>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">AI-Generated Tests</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Results Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI-Generated Test Results</h3>
                <p className="text-gray-600">Detailed breakdown of your performance on AI-created MCQ tests</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-2xl border border-blue-100">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700 font-medium">Last updated: Jan 28, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Test & Source</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Performance</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Score</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Details</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">AI Confidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tests.map((test, index) => (
                  <tr key={test.id} className="hover:bg-blue-50/30 transition-all duration-200 group">
                    <td className="px-8 py-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
                          test.sourceType === 'pdf' ? 'bg-red-100' : 'bg-blue-100'
                        }`}>
                          {test.sourceType === 'pdf' ? (
                            <FileText className={`w-6 h-6 ${test.sourceType === 'pdf' ? 'text-red-600' : 'text-blue-600'}`} />
                          ) : (
                            <Upload className="w-6 h-6 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                            {test.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1 truncate">{test.source}</p>
                          <div className="flex items-center mt-2">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getDifficultyColor(test.difficulty)}`}>
                              {test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-gray-700">
                              {test.correctAnswers}/{test.totalQuestions}
                            </span>
                            <span className="text-xs text-gray-500">
                              {Math.round((test.correctAnswers / test.totalQuestions) * 100)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500 shadow-sm"
                              style={{ width: `${(test.correctAnswers / test.totalQuestions) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-center">
                        <span className={`text-2xl font-bold ${getScoreColor(test.score)}`}>
                          {test.score}%
                        </span>
                        <p className="text-xs text-gray-500 mt-1">Final Score</p>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-gray-600">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(test.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {test.timeSpent}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{test.aiConfidence}%</p>
                          <p className="text-xs text-gray-500">AI Confidence</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;