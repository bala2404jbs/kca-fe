import { describe, it, expect, vi } from 'vitest';
import { getMediaUrl } from '../api';

describe('API Utils', () => {
  describe('getMediaUrl', () => {
    it('returns empty string for null/empty input', () => {
      expect(getMediaUrl('')).toBe('');
      expect(getMediaUrl(null as any)).toBe('');
    });

    it('returns original URL if it starts with http', () => {
      const url = 'https://example.com/image.png';
      expect(getMediaUrl(url)).toBe(url);
    });

    it('appends API_URL for relative paths', () => {
      const path = '/uploads/test.png';
      // Default API_URL in api.ts is http://localhost:3001
      expect(getMediaUrl(path)).toBe('http://localhost:3001/uploads/test.png');
    });

    it('handles relative paths without leading slash', () => {
      const path = 'uploads/test.png';
      expect(getMediaUrl(path)).toBe('http://localhost:3001/uploads/test.png');
    });
  });
});
