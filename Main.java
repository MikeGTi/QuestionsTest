import BusinessLayer.*;
import DataExportImport.IOdata;
import DataExportImport.Printer;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        //---------------------------------------------------------------------
        //Block for random numbers
        /*final int queCount = 100;
        Scanner scanner = new Scanner(System.in);
        System.out.println("������� ���-�� ����������� ��������: ");
        final int testQueCount = scanner.nextInt();

        int[] queRndNumbers = new Random().ints(testQueCount, 1, queCount).toArray();
        System.out.println(Arrays.toString(queRndNumbers));
        System.out.println("\n");*/

        //---------------------------------------------------------------------



        //IO block
        String txt1 = new TestQuestionData().GetQuestionsString();
        //System.out.println(txt1);

        String txt2 = new TestQuestionData("D:\\JavaProjects\\CreateQuestionsTest\\Task\\Input\\������_����.txt").toString();
        if (txt2 == null) return;
        String txt = txt1;

        ArrayList<? extends Question> questions = new ParserQuestion(txt).getList();
        questions.forEach(question -> new Printer(question.toString()).printLn());
        WrapperQuestions wrapperQuestions = new WrapperQuestions(questions);
        wrapperQuestions.wrapHTML("Questions assessment");

        //new Printer(wrapperQuestions.toString()).printLn();

        IOdata ioData =  new IOdata();
        ioData.writeFile("D:\\JavaProjects\\CreateQuestionsTest\\Task\\Input\\test1.html", wrapperQuestions.toString());


        //IOdata.writeObjectToFile("out\\questions.bin", questions);

        /*ArrayList<? extends Question> questions2 = IOdata.<Question>readObjectFromFile("out\\questions.bin");
        System.out.println(questions2);*/

        //---------------------------------------------------------------------
        //Template block  for tagging
        /*final int MAX_NUM = 50;

        //On classes (https://www.youtube.com/watch?v=TWmmfDvcYO0&t=1241s on typeScript)
        ArrayList<Object> rulesColl = new ArrayList<>(List.of(
                new TagNumRule(new Tag("FizzBuzz"), new AndStrategy(new ArrayList<Object>(List.of(new DividerCondition(3), new DividerCondition(5))))),
                new TagNumRule(new Tag("Fizz"), new AndStrategy(new ArrayList<Object>(List.of(new DividerCondition(3))))),
                new TagNumRule(new Tag("Buzz"), new AndStrategy(new ArrayList<Object>(List.of(new DividerCondition(5)))))));

        TagNumRulesCollection numTags = new TagNumRulesCollection(rulesColl);

        for (int i = 0; i < MAX_NUM; i++) {
            new Printer(numTags.find(i, String.valueOf(new Tag(i)))).PrintLn();
        }*/
    }
}