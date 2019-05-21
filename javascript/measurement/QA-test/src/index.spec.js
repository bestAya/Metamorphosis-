import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { App } from "./index"

afterEach(cleanup);

describe('测试单个组件', function() {
    it("基本基本组件", function() {
        const { getByTestId } = render( < App / > );
        const [ul, nav] = [getByTestId('js-ul'), getByTestId('js-p')];
        expect(ul.children.length).toBe(2);
    })
})